from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/", methods=['GET'])
def return_all_map_data():

	# Get request to database
	db = requests.get("https://api.myjson.com/bins/vxqj0").json()
	
	# Return response to user.
	return jsonify(db)

@app.route("/addintern", methods=['POST'])
def add_new_intern():

	# Data that user sent
	data = request.get_json()
	
	# Get data from db, isolating array from rest of json, append new element to array
	db = requests.get("https://api.myjson.com/bins/vxqj0").json()
	entries = db["entries"]
	entries.append(data)
	
	# Writing to database
	requests.put("https://api.myjson.com/bins/vxqj0", json=db)
	
	# Success!
	return "success"

@app.route("/getstate", methods=['POST'])
def get_state():
	data = request.get_json()
	state = data["state"]
	db = requests.get("https://api.myjson.com/bins/vxqj0").json()
	interns = [x for x in db['entries'] if x['location']['state'] == state]
	print(interns)

	response = {
		'interns': interns
	}

	return jsonify(response)


if __name__ == "__main__":
	app.run()