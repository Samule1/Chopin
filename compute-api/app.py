from flask import Flask
from pca_cluster import kkmeans
from flask.globals import request


app = Flask(__name__)

@app.route('/')
def principal_clusters():
    args = request.args.get('data')

    return args

if __name__ == "__main__":
    print "running.."
    app.run(debug=True, port=5000)
    


