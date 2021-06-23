import pandas as pd
import numpy as np
from train.preprocessing import code_users
def preprocess_users(min_post_like,min_user_like):
    data=pd.read_csv("data/articles-users-n.csv")
    data=data.dropna()
    dic1,dic2={},{}
    listeArticles=data['numeroArticle']
    liste=list(listeArticles)
    for c in liste:
        dic1[c]=dic1.get(c,0)+1
    liste=dic1.keys()
    listeUsers=data['numeroUser']
    for x in liste:
        liste=[]
        for y in range(22779):
            if(x==listeArticles[y]):
                liste.append(listeUsers[y])
        dic2[x]=liste
    like_matrix,labels =code_users.full_dataset(dic2,min_post_like=min_post_like,min_user_like=min_user_like)
    return like_matrix, labels

