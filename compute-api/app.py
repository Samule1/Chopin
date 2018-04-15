from flask import Flask, jsonify
from pca_cluster import kkmeans
from flask.globals import request

import json

app = Flask(__name__)

@app.route('/')
def welcome():
    """Welcome page"""
    return "Welcome to the chopin compute API. goto /help for info on the available services"

@app.route('/smartcluster', methods = ['POST'])
def principal_clusters():
    """Perform a k means clustering and PCA
    args:
    data - JSON formatted data array containing the features of each track.
    k - number of clusters
    """
    jsondata = request.json
    features = jsondata.get('data')
    k = jsondata.get('k')
    return kkmeans.get_clusters(features, k)

@app.route('/help')
def info_page():
    """Print available functions."""
    func_list = {}
    for rule in app.url_map.iter_rules():
        if rule.endpoint != 'static':
            func_list[rule.rule] = app.view_functions[rule.endpoint].__doc__
    return jsonify(func_list)
    

if __name__ == "__main__":
    print("running..")
    app.run(debug=True, port=5000)
    


