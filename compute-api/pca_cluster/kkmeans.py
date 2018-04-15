from sklearn.cluster import KMeans
from sklearn import preprocessing
import json
from sklearn.decomposition import PCA
 
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


def get_clusters(data, k = 2):


    d = []
    for datapoint in data:
        d.append(list(datapoint.values()))
    
    d = np.array(d)
    norm_data = (d - d.min(0)) / d.ptp(0)
    df = pd.DataFrame(norm_data)
    kmeans = KMeans(n_clusters=k, random_state=0).fit(df.values)
    
    similarities = get_centroid_sim(norm_data, np.array(kmeans.labels_), np.array(kmeans.cluster_centers_))

    clusters_and_sims  = [{"cluster": c.item(), "similarity": s.item()} for c, s in zip(kmeans.labels_, similarities)]

    return json.dumps(clusters_and_sims)



def get_centroid_sim(data, clusters, centroids):

    sim_out = np.zeros(len(clusters))

    if not (len(data) == len(clusters)):
        raise RuntimeError('Vector of datapoints must be of same length as vector of clusters')

    for i in range(len(centroids)):

        indicies = np.where(clusters == i)
        data_in_cluster = data[indicies]
        
        #Making the centroid inti column vector.
        centroid = np.array([centroids[i]])
        
        #Compute the normalized distance.
        distance_vectors = data_in_cluster - centroid
        distances = np.linalg.norm(distance_vectors, axis = 1)
        distances_norm = distances / np.amax(distances)
        sim = 1 - distances_norm
        np.put(sim_out, indicies, sim)

    return sim_out

    

if __name__ == "__main__":
    print("This module should not be run as main..")
    data = json.load(open('C:\\Users\\sethh\\Desktop\\TDDD27-Webproject\\compute-api\\pca_cluster\\data\\cluster_data.json'))
    get_clusters(data)
