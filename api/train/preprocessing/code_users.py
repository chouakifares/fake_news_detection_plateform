import numpy as np
from collections import Counter
from scipy.sparse import dok_matrix, csr_matrix
import itertools

"""la première fonction renvoie l'ensemble de données filtré avec :
        *min_post_like: les postes avec au moins n likes.
        *min-user-like: le user qui a interagi avec au moins n postes.
"""
def full_dataset(data, min_post_like, min_user_like, print_results=False):
    
    #post filter
    data_posts_f = {post: users
                      for post, users in data.items()
                      if len(users) >= min_post_like}

    #user filter
    user_list = []
    data_users_f = dict()
    for i in data.values():
        user_list.extend(i)
    user_count = Counter(user_list)
    users_filtered = {user for (user, count) in user_count.items() if count >= min_user_like}
    data_users_f = {post: [user for user in users if user in users_filtered]
                         for post, users in data_posts_f.items()}
 

    #dic_posts, dic_users conversion
    dic_users = dict((user_id, user_n) for (user_n, user_id) in enumerate(users_filtered))
    dic_posts = dict((post_id, post_n) for (post_n, post_id) in enumerate(data_users_f.keys()))
     
    #construire like_matrix
    like_matrix = dok_matrix((len(dic_posts), len(dic_users)), dtype=np.int8)
    
    #remplissage de la matrice et la liste labels
    labels = []
    for post, users in data_users_f.items():
        if int(post) >91:
            labels.append(1)
        else:
            labels.append(0)
        for user in users:
            like_matrix[dic_posts[post], dic_users[user]] = True
            
    #afficher le résultat
    if print_results:
        print("Posts with %d+ likes = %d (%d fake)" %(min_post_like,len(data_posts_f),
               len([post for post in data_posts_f.keys() if int(post)>91])))
        print("Users with %d+ likes = %d" % (min_user_like, len(users_filtered)))
   
    return like_matrix, labels



"""la deuxième fonction qui renvoie l'ensemble de données filtré avec uniquement les utilisateurs 
qui ont aimé au moins un article faux et un article vrai """
def intersection_dataset(data, print_results=False):
    
    #split-data
    likes_fake = []
    likes_true =[]
    
    for (post, likes) in data.items():
        if int(post) >91:
                likes_fake= likes_fake+likes
        else:
                likes_true=likes_true+ likes    
     
    #split-users according to interactions
    fake_likers = set(likes_fake)
    true_likers = set(likes_true)
    both_likers = true_likers.intersection(fake_likers)
    
   

    #user filter
    data_users_f = {post: [user for user in users if user in both_likers]
                         for post, users in data.items()
                         if len([user for user in users if user in both_likers])>0}
    
    

    #postid, userid conversion
    dic_users = dict((user_id, user_n) for (user_n, user_id) in enumerate(both_likers))
    dic_posts = dict((post_id, post_n) for (post_n, post_id) in enumerate(data_users_f.keys()))
    

    #construire like_matrix
    like_matrix = dok_matrix((len(dic_posts), len(dic_users)), dtype=np.int8)
    
    #remplissage de la matrice et la liste labels
    labels = []
    for post, users in data_users_f.items():
        if int(post) >91:
            labels.append(1)
        else:
            labels.append(0)
        for user in users:
            like_matrix[dic_posts[post], dic_users[user]] = True
            
            
    #afficher le résultat
    if print_results:
        print('Total users: %d, Intersection users: %d' % (len(set(fake_likers.union(true_likers))),len(both_likers)))
  
    return like_matrix, labels

