from flask import Flask, render_template,request,jsonify
import requests
from random import randint
from forms import LuckyForm


app = Flask(__name__)


@app.route("/")
def homepage():
    """Show homepage."""

    return render_template("index.html")

def get_random_trivia(number):
    """get random number and return trivia"""
    resp = requests.get(f"http://numbersapi.com/{number}")
    fact = resp.text
    return {"num":number,"fact":fact}

def get_number_year(number):
    """give a number and return year"""
    resp = requests.get(f"http://numbersapi.com/{number}/year")
    year= resp.text
    return {"num":number,"fact":year}


@app.route("/api/get-lucky-num", methods=['POST'])
def call_random_num_api():

    received = request.json
    
    form = LuckyForm(csrf_enabled=False,data=received)
    number = randint(0,100)

    if form.validate_on_submit():
        y = received['year']
        numdata = get_random_trivia(number)
        yeardata = get_number_year(y)
        
        return jsonify(
        num = numdata,
        year=yeardata)
    
    else:
        return jsonify(errors=form.errors)

