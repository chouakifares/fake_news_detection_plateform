from flask import Flask, request,jsonify, render_template
from flask_cors import CORS, cross_origin
app = Flask(__name__,static_folder= "./dist",template_folder="./dist")
from train.training import combination, linguistic_only,user_only
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/api/evaluation',methods = ['POST', 'GET'])
@cross_origin()
def evaluate_model():
    if request.method == 'POST':
        #selected dataset is FNN
        if(request.json["dataset"] =="FNN"):
            if(request.json["model"]=="linguistic_only"):
                return format_results(linguistic_only(
                        0,request.json["algo"],
                        request.json["matrix_nb_row"] if "matrix_nb_row" in request.json else 0 ,
                        request.json["test_size"] if "test_size" in request.json else 0.3))
                
            elif(request.json["model"]=="user_only"):
                return format_results(user_only(request.json["algo"],
                    request.json["test_size"]
                    if "test_size" in request.json else 0.3,
                    request.json["min_post_like"]
                    if "min_post_like" in request.json else 20,
                    request.json["min_user_like"]
                    if "min_user_like" in request.json else 40,
                    ))
            else:
                return format_results(combination(
                        request.json["algo"],
                        request.json["matrix_nb_row"]
                        if "matrix_nb_row" in request.json else 0,
                        request.json["test_size"]
                        if "test_size" in request.json else 0.3))
        else:
            return format_results(linguistic_only(
                1,request.json["algo"],
                request.json["matrix_nb_row"] 
                if "matrix_nb_row" in request.json else 0,
                request.json["test_size"] 
                if "test_size" in request.json else 0.3))
    else:
        pass

def format_results(results):
    print(results)
    return jsonify({
        "accuracy":results[0],
        "f1_score":results[1],
        "precision":results[2],
        "recall": results[3],
        "true_positive": int(results[4][0][0]),
        "false_positive": int(results[4][0][1]),
        "false_negative": int(results[4][1][0]),
        "true_negative":int(results[4][1][1]),
        })

if __name__ == '__main__':
   app.run()
