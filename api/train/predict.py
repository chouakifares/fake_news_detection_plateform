import numpy as np
import pandas as pd
import pickle
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequence 
def ready_tokenizer():
    tokenizer = Tokenizer()
    fake_ds = pd.read_csv("data/ISOT/Fake.csv")
    fake_texts = fake_ds.loc[:,"title"] + fake_ds.loc[:,"text"]
    real_ds = pd.read_csv("data/ISOT/True.csv")
    real_texts = real_ds.loc[:,"title"] + real_ds.loc[:,"text"]
    training_docs = pd.concat([fake_texts,real_texts],axis = 0)
    tokenizer.fit_on_texts(training_docs)
    return tokenizer
