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


# FOR GIT 
# git commit -a -m "message"
# git push origin HEAD:master
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(__name__)

Session(app)

# Set path of app.py to use for database connections
BASE_DIR=os.path.dirname(os.path.abspath(__file__))
UPLOAD_FOLDER=os.path.join(BASE_DIR, "static/images")

def print_image_search(season , episode):
    image_list = os.listdir(UPLOAD_FOLDER)
    result = [] 
    r = []
    if(season !="" and episode !=""):
        print("IN HERE 1:")
        string = "S" + season + "E" + episode
        result.append(string +".mp4")
        result.append(string +".jpeg")
    elif(season !=""):
        for i in range(1,24):
            print("IN HERE 2:")
            string = "S" + season + "E" + str(i)
            result.append(string +".mp4")
            result.append(string +".jpeg")
    elif(episode !=""):
        print("IN HERE 3:")
        for j in range(1,9):
            string = "S" + str(j) + "E" + episode
            result.append(string +".mp4")
            result.append(string +".jpeg")
        for j in range(10,26):
            string = "S" + str(j) + "E" + episode
            result.append(string +".mp4")
            result.append(string +".jpeg")
    
   
    r = list(set(image_list).intersection(result))
    r = [i.replace("S","static/images/S") for i in r]
    
    #print("result:")
    #print(result)
    #print("imlist:")
    #print(image_list)
    
    r.sort()
    print("HERE IS R:")
    print("Adding this for commit")
    print("test")
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

@app.route('/S1E1/')
def S1E1():
    return render_template('S1E1.html')

@app.route('/S1E2/')
def S1E2():
    return render_template('S1E2.html')

@app.route('/S1E3/')
def S1E3():
    return render_template('S1E3.html')

@app.route('/S1E4/')
def S1E4():
    return render_template('S1E4.html')

@app.route('/S1E5/')
def S1E5():
    return render_template('S1E5.html')

@app.route('/S1E6/')
def S1E6():
    return render_template('S1E6.html')

@app.route('/S1E7/')
def S1E7():
    return render_template('S1E7.html')

@app.route('/S1E8/')
def S1E8():
    return render_template('S1E8.html')

@app.route('/S1E9/')
def S1E9():
    return render_template('S1E9.html')

@app.route('/S1E10/')
def S1E10():
    return render_template('S1E10.html')

@app.route('/S1E11/')
def S1E11():
    return render_template('S1E11.html')

@app.route('/S1E12/')
def S1E12():
    return render_template('S1E12.html')

@app.route('/S1E13/')
def S1E13():
    return render_template('S1E13.html')

@app.route('/S1E14/')
def S1E14():
    return render_template('S1E14.html')

@app.route('/S1E15/')
def S1E15():
    return render_template('S1E15.html')

@app.route('/S1E16/')
def S1E16():
    return render_template('S1E16.html')

@app.route('/S1E17/')
def S1E17():
    return render_template('S1E17.html')

@app.route('/S1E18/')
def S1E18():
    return render_template('S1E18.html')

@app.route('/S1E19/')
def S1E19():
    return render_template('S1E19.html')

@app.route('/S1E20/')
def S1E20():
    return render_template('S1E20.html')

@app.route('/S1E21/')
def S1E21():
    return render_template('S1E21.html')

@app.route('/S1E22/')
def S1E22():
    return render_template('S1E22.html')

@app.route('/S1E23/')
def S1E23():
    return render_template('S1E23.html')

@app.route('/S1E24/')
def S1E24():
    return render_template('S1E24.html')

@app.route('/S2E1/')
def S2E1():
    return render_template('S2E1.html')

@app.route('/S2E2/')
def S2E2():
    return render_template('S2E2.html')

@app.route('/S2E3/')
def S2E3():
    return render_template('S2E3.html')

@app.route('/S2E4/')
def S2E4():
    return render_template('S2E4.html')

@app.route('/S2E5/')
def S2E5():
    return render_template('S2E5.html')

@app.route('/S2E6/')
def S2E6():
    return render_template('S2E6.html')

@app.route('/S2E7/')
def S2E7():
    return render_template('S2E7.html')

@app.route('/S2E8/')
def S2E8():
    return render_template('S2E8.html')

@app.route('/S2E9/')
def S2E9():
    return render_template('S2E9.html')

@app.route('/S2E10/')
def S2E10():
    return render_template('S2E10.html')

@app.route('/S2E11/')
def S2E11():
    return render_template('S2E11.html')

@app.route('/S2E12/')
def S2E12():
    return render_template('S2E12.html')

@app.route('/S2E13/')
def S2E13():
    return render_template('S2E13.html')

@app.route('/S2E14/')
def S2E14():
    return render_template('S2E14.html')

@app.route('/S2E15/')
def S2E15():
    return render_template('S2E15.html')

@app.route('/S2E16/')
def S2E16():
    return render_template('S2E16.html')

@app.route('/S2E17/')
def S2E17():
    return render_template('S2E17.html')

@app.route('/S2E18/')
def S2E18():
    return render_template('S2E18.html')

@app.route('/S2E19/')
def S2E19():
    return render_template('S2E19.html')

@app.route('/S2E20/')
def S2E20():
    return render_template('S2E20.html')

@app.route('/S2E21/')
def S2E21():
    return render_template('S1E21.html')

@app.route('/S2E22/')
def S2E22():
    return render_template('S2E22.html')

@app.route('/S2E23/')
def S2E23():
    return render_template('S2E23.html')

@app.route('/S2E24/')
def S2E24():
    return render_template('S2E24.html')

@app.route('/S2E25/')
def S2E25():
    return render_template('S2E25.html')

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
        if(sea == "" and ep == "" and who == ""):    
            message = "Try again:Please enter a search parameter"
            return render_template('search.html', message=message)
        
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