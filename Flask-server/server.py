from flask import Flask, jsonify, request, redirect, render_template, flash, session
from flask_session import Session
from flask_mysqldb import MySQL
import yaml

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
app.config["SECRET KEY"] = "defaulter123"
Session(app)

db = yaml.full_load(open('db.yaml'))
app.config['MYSQL_HOST'] = db['mysql_host']
app.config['MYSQL_USER'] = db['mysql_user']
app.config['MYSQL_PASSWORD'] = db['mysql_password']
app.config['MYSQL_DB'] = db['mysql_db']

mysql = MySQL(app)
import models

@app.route("/login", methods = ['GET', 'POST'])
def login():
    users = models.Table("teacher", "tid", "tname", "tdesignation", "temail", "tpass", "tspecialization", "tdept", "teducation")
    #users.logout()
    email = request.json['email']
    password = request.json['password']
    user = users.getone("temail", email)
    if user is None:
        #flash("Invalid Email",'danger')
        #print("Outer if reached")
        return jsonify(Status="User Not Found")
    else:
        og_pass=user[3]
        if password!=og_pass:
            #flash("Password invalid", 'danger')
            #print("Else reached")
            return jsonify(status="Invalid Password")
        else:
            session['logged_in'] = True
            session['id'] = user[0]
            session['name'] = user[1]
            session['email'] = user[2]
            return jsonify(status="Auth Success!",id=session['id'],name=session['name'],email=session['email'])        
    
@app.route('/',methods=['GET', 'POST'])
def index():
    print("Backend Running")
    return 'True'


        


if __name__ == '__main__':
    app.run(debug=True)