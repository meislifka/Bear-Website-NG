from calendar import month
import os
from re import template
# from tkinter.tix import INTEGER, TEXT
from flask import Flask, render_template, redirect, url_for, request, flash, session
import sqlite3
from flask_session import Session
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash
import os.path
import random

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SECRET_KEY"] = 'super secret key'
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Set path of app.py to use for database connections
BASE_DIR=os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER=os.path.join(BASE_DIR, "static/images")

def print_image_search(season , episode):
    image_list = os.listdir(UPLOAD_FOLDER)
    result = []
    if(season !="" and episode !=""):
        string = "S" + season + "E" + episode
        result.append(string +".mp4")
        result.append(string +".png")
    elif(season !=""):
        for i in range(1,8):
            string = "S" + season + "E" + str(i)
            result.append(string +".mp4")
            result.append(string +".png")
    elif(episode !=""):
        for j in range(1,9):
            string = "S" + str(j) + "E" + episode
            result.append(string +".mp4")
            result.append(string +".png")
        for j in range(10,26):
            string = "S" + str(j) + "E" + episode
            result.append(string +".mp4")
            result.append(string +".png")
    r = []
    r = list(set(result).intersection(image_list))
    r = [i.replace("S","static/images/S") for i in result]
    
    print("result:")
    print(result)
    print("imlist:")
    print(image_list)
    
    r.sort()
    print("HERE IS R:")
    print(r)
    return r            

    
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# check_same_thread=False ensures db commands run anywhere in file
con = sqlite3.connect("bearR.db", check_same_thread=False)
db = con.cursor()
# con.commit()

@app.route('/')
def home():
    return render_template('home.html')
@app.route('/about/')
def about():
    return render_template('about.html')


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Route for handling the search page logic
@app.route('/search', methods=["POST", "GET"])
def search():
    message = None
    if request.method == 'POST':
        
        db_path = os.path.join(BASE_DIR, "bearR.db")
        conn = sqlite3.connect(db_path)
        cur = conn.cursor() 
        sea = request.form['season']
        ep = request.form['episode']
        who = request.form['who']
        imageList =[]

        searchParam = []
        statement = 'SELECT * FROM bearRef WHERE'
        exist = False
        #logic for user searchces 
        if sea !="":
            searchParam.append(sea)
            statement = statement + ' season=?'
            exist = True 
        if who !="":
            searchParam.append(who)
            if exist:
                statement = statement + ' and who=?'
            else:
                statement = statement + ' who=?'
                exist = True
        
        if ep !="":
            searchParam.append(ep)
            if exist:
                statement = statement + ' and episode=?'
            else:
                statement = statement + ' episode=?'
        
        print("season"+ sea + "Ep " + ep)
        imageList = print_image_search(sea, ep)  
        print("IMAGE LIST BELOW \n")
        print(imageList)
        cur.execute(statement, searchParam)
        entry = cur.fetchall()
        return render_template('searchPost.html',entry = entry, imageList=imageList) 
        
    return render_template('search.html', message=message)




if __name__ == '__main__':
    app.run(debug=True)