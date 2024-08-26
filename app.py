from flask import Flask, request
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)

# connecting the sql server
mydb = mysql.connector.connect(
  host="localhost",
  user="magicbus",
  password="password",
  database="todoApp"
)

# fetch all the todos from the database
@app.route("/")
def hello_world():
		mycursor = mydb.cursor()

		mycursor.execute("SELECT * FROM todos")

		myresult = mycursor.fetchall()

		print(myresult)
		return myresult

@app.route("/add", methods=["post"])
def add_todo():
		let req_data = request.json
		mycursor = mydb.cursor()
		# store the todo in database
		mycursor.execute("INSERT INTO todos (title, timestamp, isCompleted ) VALUES ('Watch some series', '2024-08-26 13:02:01', false);")

		mydb.commit()

		print(mycursor.rowcount, "record inserted.")

		# fetch todo from request
		return "Todo added!"
