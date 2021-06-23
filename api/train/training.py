import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn import metrics
from sklearn.preprocessing import StandardScaler
from pickle import load
from train.preprocessing.preprocess_user import preprocess_users
DATA_DIR = "data/preprocessed/text/"

def get_dataset_location(dataset):
    if(dataset==0): return DATA_DIR+"FNN.pkl"
    elif(dataset==1): return DATA_DIR+"Liar.pkl"
    elif(dataset==2): return DATA_DIR+"ISOT.pkl"

def get_dataset_ideal_params(dataset):
    if(dataset==0): return 56
    elif(dataset==1): return 81

def get_data(dataset,matrix_nb_row=0,test_size=0.3):
    with open(get_dataset_location(dataset), "rb") as f:
        data = load(f)
    y = data[:,0]
    print(y)
    X = data[:,1:matrix_nb_row if matrix_nb_row!=0 else get_dataset_ideal_params(dataset)]
    x_train,x_test,y_train,y_test=train_test_split(X,y,test_size=test_size,random_state=0)
    sc = StandardScaler()
    x_train = sc.fit_transform(x_train)
    x_test = sc.transform(x_test)
    return x_train,x_test,y_train,y_test

def train_regressor(regressor,x_train,y_train):
    if(regressor): return LinearRegression().fit(x_train,y_train)
    else: return RandomForestRegressor().fit(x_train,y_train)

def train_classifier(classifier,x_train,y_train):
    if(classifier==0):
        return LogisticRegression().fit(x_train,y_train)
    elif(classifier==1):
        return DecisionTreeClassifier().fit(x_train,y_train)
    else:
        return RandomForestClassifier().fit(x_train,y_train)

def evaluate_regressor(regressor,x_test,y_test):
    y_pred = regressor.predict(x_test)
    return (metrics.mean_squared_error(y_pred,y_test), metrics.mean_absolute_error(y_pred,y_test))

def evaluate_classifier(classifier,x_test,y_test):
    y_pred = classifier.predict(x_test)
    return (metrics.f1_score(y_test, y_pred),
            metrics.accuracy_score(y_test,y_pred),
            metrics.precision_score(y_test,y_pred),
            metrics.recall_score(y_test,y_pred),
            metrics.confusion_matrix(y_test,y_pred))

def combination(linguistic_algo,user_algo,combination_algo,matrix_nb_row=0,test_size=0.3,min_post_like=0,min_user_like=0):
    x_train,x_test,y_train,y_test=get_data(0,matrix_nb_row,test_size)
    linguistic_regressor = train_regressor(linguistic_algo,x_train,y_train)
    linguistic_regressor_results = evaluate_regressor(linguistic_regressor,x_test,y_test)
    linguistic_pred = linguistic_regressor.predict(np.concatenate((x_train,x_test)))
    X,y = preprocess_users(min_post_like,min_user_like)
    x_train,x_test,y_train,y_test=train_test_split(X,y,test_size=test_size,random_state=0)
    user_regressor = train_regressor(user_algo,x_train,y_train)
    user_regressor_results = evaluate_regressor(user_regressor,x_test,y_test)
    user_pred = user_regressor.predict(X)
    X = np.array([user_pred,linguistic_pred]).transpose()
    x_train,x_test,y_train,y_test=train_test_split(X,y,test_size=test_size,random_state=0)
    clf = train_classifier(combination_algo,x_train,y_train)
    return evaluate_classifier(clf,x_test,y_test)
def linguistic_only(dataset,algo,matrix_nb_row=0,test_size=0.3):
    x_train,x_test,y_train,y_test=get_data(dataset,matrix_nb_row,test_size)
    clf = train_classifier(algo,x_train,y_train)
    return evaluate_classifier(clf,x_test,y_test)

def user_only(algo,test_size,min_post_like=40,min_user_like=20):
    X,y = preprocess_users(min_post_like,min_user_like)
    x_train,x_test,y_train,y_test=train_test_split(X,y,test_size=test_size,random_state=0)
    clf = train_classifier(algo,x_train,y_train)
    return evaluate_classifier(clf, x_test,y_test)
