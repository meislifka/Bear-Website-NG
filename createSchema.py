import sqlite3

conn = sqlite3.connect('bearR.db')
print("Opened database successfully")

conn.execute('CREATE TABLE bearRef (season INTEGER, episode INTEGER, who TEXT, timeStamp TEXT)')
print("Table created successfully")

conn.execute('INSERT INTO bearRef (season ,episode ,who ,timeStamp ) VALUES (1, 1, "Coach", "21:59") ')
conn.close()