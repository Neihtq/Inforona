import json
import requests

from flask import Flask, jsonify
from flask_cors import CORS

from utils.constants import ENDPOINTS, URL

app = Flask(__name__)
CORS(app)

r = requests.get(URL + ENDPOINTS.states)
data = r.json()['data']
STATES_DICT = {data[abb]['name']: abb for abb in data}

r = requests.get(URL + ENDPOINTS.districts)
data = r.json()['data']
DISTRICTS_DICT = {}
for ags in data:
    county = data[ags]['county']
    name = data[ags]['name']
    county_prefix = 'Landkreis ' if 'LK' in county else 'Stadtkreis '
    DISTRICTS_DICT[county_prefix + name] = ags


@app.route(ENDPOINTS.germany)
def germany():
    r = requests.get(URL + ENDPOINTS.germany)
    data_1 = r.json()
    
    r = requests.get(URL + ENDPOINTS.vaccinations)
    data_2 = r.json()

    incidence = data_1['weekIncidence']
    quote_1 = data_2['data']['quote']
    quote_2 = data_2['data']['secondVaccination']['quote']
    response = {
        'incidence': incidence,
        'quote1': quote_1,
        'quote2': quote_2
    }
    print("TEST")
    return jsonify(response)


@app.route(ENDPOINTS.states + '/list')
def list_states():
    return {'data': list(STATES_DICT.keys())}


@app.route(ENDPOINTS.districts + '/list')
def list_districts():
    return {'data': list(DISTRICTS_DICT.keys())}


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888, threaded=True)