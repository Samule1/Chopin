from numpy import array
from sklearn.cluster import KMeans
from sklearn import preprocessing
import json
from sklearn.decomposition import PCA
 
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


def get_clusters(data, k = 2, prnt=False):
    
    df = pd.DataFrame(data)
    dfvals = df.values
    min_max_scaler = preprocessing.MinMaxScaler()
    df_scaled = min_max_scaler.fit_transform(dfvals)
    df_scaled = pd.DataFrame(df_scaled, columns=df.columns.values.tolist())
    kmeans = KMeans(n_clusters=2, random_state=0).fit(df)
    
    pc = PCA(n_components=2)
    pc.fit(np.transpose(df_scaled.values))
    if prnt:
        print(pc.components_[1]) 
        
        plt.plot(pc.components_[0], pc.components_[1], 'ro')
        plt.show()
    
    
    print(kmeans.labels_)
    

if __name__ == "__main__":
    print "This module should not be run as main.."
