from flask import Flask, jsonify, request
app = Flask(__name__)
from flask_cors import CORS, cross_origin
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

import numpy as np
import pickle

filename1 = 'respiratory_infection.pkl'
loaded_model1 = pickle.load(open(filename1, 'rb'))
filename2 = 'artery_infection.pkl'
loaded_model2 = pickle.load(open(filename2, 'rb'))
filename3 = 'liver_infection.pkl'
loaded_model3 = pickle.load(open(filename3, 'rb'))
filename4 = 'malignancy_infection.pkl'
loaded_model4 = pickle.load(open(filename4, 'rb'))
filename5 = 'pulmonary_infection.pkl'
loaded_model5 = pickle.load(open(filename5, 'rb'))
filename6 = 'renal_infection.pkl'
loaded_model6 = pickle.load(open(filename6, 'rb'))
filename7 = 'stroke_infection.pkl'
loaded_model7 = pickle.load(open(filename7, 'rb'))


@app.route('/', methods = ['GET'])
@cross_origin()
def check():
    return jsonify({'message':'It works!'})

@app.route('/predict', methods = ['POST'])
@cross_origin()
def predict():
    age=float(request.json["age"])
    gender_num=float(request.json["gender_num"])
    bmi=float(request.json["bmi"])
    map=float(request.json["map"])
    hr=float(request.json["hr"])
    temp=float(request.json["temp"])
    data_input=[age,gender_num,bmi,map,hr,temp]

    result1=loaded_model1.predict([data_input])[0]*100
    result2=loaded_model2.predict([data_input])[0]*100
    result3=loaded_model3.predict([data_input])[0]*100
    result4=loaded_model4.predict([data_input])[0]*100
    result5=loaded_model5.predict([data_input])[0]*100
    result6=loaded_model6.predict([data_input])[0]*100
    result7=loaded_model7.predict([data_input])[0]*100



    return jsonify({'resp':result1, 'artery':result2, 'liver':result3, 'malignancy':result4, 'pulmonary':result5, 'renal':result6, 'stroke':result7})
    
if __name__=='__main__':
    app.run(debug=True, port=8080)