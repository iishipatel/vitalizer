from flask import Flask, jsonify, request
app = Flask(__name__)
from flask_cors import CORS, cross_origin
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

disease_info = [{
  "Description": "Coronary artery disease occurs when the major blood vessels, called coronary arteries, that supply the heart with nutrients, blood and oxygen become diseased or damaged. Deposits containing cholesterol in the arteries and inflammation are usually the reasons behind the condition since these deposits, called plaques, build up and narrow the coronary arteries. This decreases blood flow to the heart, causing shortness of breath, chest pain, or other symptoms and signs of coronary artery disease. A total blockage may trigger a heart attack. It can be difficult to notice the condition since coronary artery disease develops often over decades.",
  "DescriptionShort": "Coronary artery disease is a hardening of the arteries within the arteries of the heart and it leads to a narrowing of the arteries as well as a reduction in the circulation of blood to the muscles of the heart and the symptoms associated with that. Thus it can cause circulatory disorders with accompanying chest pain (angina pectoris), a heart attack, or even sudden death from heart failure. A healthy lifestyle can make a huge contribution to avoid this happening.",
  "MedicalCondition": "Coronary artery disease is common predominantly in developed countries. Risk factors for coronary artery disease and the same as those for arteriosclerosis:  high blood pressure (hypertension), smoking, increased blood lipid levels (especially cholesterol), age, heart attacks (in related family members), diabetes, being overweight, a diet rich in calories and fats, lack of exercise, and high levels of stress. Decreased blood supply to the heart muscles leads to symptoms typical of angina pectoris with feelings of tightness in the chest and a pressure on the chest that radiates out to the throat or the left arm. Symptoms may feel similar to those of heartburn. Symptoms usually manifest during periods of effort, psychological stress, or in cold conditions and disappear within 15 minutes.",
  "Name": "Coronary heart disease",
  "PossibleSymptoms": "Chest pain,Chest tightness,Cold sweats,Blackening of vision,Heartburn,Shortness of breath,Tiredness,Unconsciousness, short,Weight gain,Abdominal pain,Back pain,Neck pain,Palpitations,Nausea,Feeling faint,Trouble understanding speech",
  "ProfName": "Coronary artery disease",
  "Synonyms": "CAD,ischemic heart disease,IHD,atherosclerotic heart disease,atherosclerotic cardiovascular disease",
  "TreatmentDescription": "If a plaque built up in a vessel detaches, the coronary artery is then closed and cause a heart attack, which is the dying off of part of the heart’s own muscles caused by lack of blood. Symptoms typically include intense, long-lasting angina pectoris that does not improve, accompanied by nausea, cold sweats, and shortness of breath. In the worst case, a heart attack can lead to death, so if the above mentioned symptoms occur it is an emergency situation and a hospital visit is necessary. In order to prevent coronary artery disease, it’s important to get regular daily exercise, eat a Mediterranean-style diet (little fat, lots of vegetables, fish, and fiber), avoiding nicotine (quitting is best), and keeping blood sugar, blood pressure, and blood lipid levels in check. To clarify the causes for angina pectoris, you should visit a specialist in cardiology.  Treatment depends on the severity of the disease (see the article on heart attacks)."
}, {
  "Description": "Infection of the kidneys with bacteria is referred to as a pyelonephritis, which is an infection of the kidney pelvis. Bacteria usually reach the kidney by the urethra and bladder, then the pelvis of the kidney, where they cause an infection. Reasons for infection can include an interrupted flow of urine (either because of a benign enlargement of the prostate, kidney stone or previous bladder inflammation), repetitive use of painkillers, diabetes or catheters.",
  "DescriptionShort": "A kidney infection or pyelonephritis is an unpleasant and painful condition that is triggered by bacteria travelling from the bladder into one of the two kidneys. Patients suffer from fever, chills, and flank pain.",
  "MedicalCondition": "Small children, pregnant women, and the elderly are often affected by kidney infections. Acute development of pyelonephritis show symptoms such as fever, chills, pain while urinating, and flank pain. Sometimes headache, nausea, and vomiting also occur.",
  "Name": "Infection of kidney pelvis",
  "PossibleSymptoms": "Side pain,Burning sensation when urinating,Painful urination,Dark urine,Fever,Chills,Abdominal pain,Back pain,Lower-back pain,Tiredness,Vomiting,Nausea,Headache",
  "ProfName": "Pyelonephritis in men",
  "Synonyms": "Kidney infection,Infection of the kidneys",
  "TreatmentDescription": "Ultrasound and an urine and blood examination can confirm the diagnosis. A quick and direct treatment with antibiotics is important and should show improvement without 24 hours. Insufficient treatment can lead to serious complications such as kidney failure or the spread of pathogens into the rest of the body (sepsis)."
}, {
  "Description": "Hepatitis is an inflammation of the liver that may be acute (short term) or chronic (long term). Frequent causes of hepatitis are viruses (such as the hepatitis virus), substances that do damage to the liver (alcohol, drugs, medications), fatty liver due to obesity, as well an uncontrolled response of the immune system (an autoimmune disease).",
  "DescriptionShort": "Hepatitis is an inflammation of the liver and can have different causes. Chronic inflammation of the liver can lead to permanent damage (liver cirrhosis). Patients usually experience general malaise and whites of the eyes (sclera) turning yellow.",
  "MedicalCondition": "The cause of hepatitis normally gets along with the risk factors that people are exposed. Groups at risk include travelers, drug users, health workers who come into contact with blood, alcoholics, and overweight people. Those affected may develop jaundice (icterus), which causes the white part of the eye and the skin to become yellow. The patient may feel apathetic and report a lack of appetite or nausea.",
  "Name": "Inflammation of the liver",
  "PossibleSymptoms": "Reduced appetite,Abdominal pain,Dark urine,Vomiting,Fever,Yellow colored skin,Yellowish discoloration of the white part of the eye,Weight loss,Itching of skin,Tiredness,Nausea,Joint pain,Diarrhea,Blue spot on skin,Skin redness,Feeling ill",
  "ProfName": "Hepatitis",
  "Synonyms": "",
  "TreatmentDescription": "If the liver remains inflamed for a long time (chronic hepatitis), then permanent damage can arise (cirrhosis of the liver) and in rare cases it can even develop into cancer (carcinoma of the liver). Hepatitis should be handled by a doctor, preferably by a specialist (gastroenterologist). The nature of treatment depends on the cause. Vaccinations for pathogens (hepatitis A and B) can be administered in those cases. Substances that damage the liver (alcohol, some medication) should be avoided if possible. In the case of a fatty liver, treatment consists of losing weight to prevent any possible forms of diabetes. In the case of an autoimmune-related inflammation, medications that suppress the immune system (such as cortisone) can be administered."
}, {
  "Description": "A bone tumor is a condition involving the growth of an abnormal lump or mass in a bone. The abnormal growing tissue may replace healthy tissue with the abnormal tissue. Eventually it may weaken the structure of the bones. A bone tumor can be benign or malignant. Malignant bone tumors can be classified either as primary or secondary.",
  "DescriptionShort": "A bone tumor is abnormal cell or tissue growth in a bone. It can be either benign or malignant. The treatment of malignant bone tumors often includes surgery, radiation therapy and chemotherapy.",
  "MedicalCondition": "The cause of a benign bone tumor is unknown. Overgrowth of bones, the stimulation of inflammation, metabolic problems, congenital defects of bones, radiation and injury are possible causes. A malignant bone tumor can be categorized as either a primary or a secondary bone tumor. Primary bone tumors originate from bone cells (either conjunctive tissue or bone marrow tissue). The common primary bone tumors include chondrosarcoma, multiple myeloma, osteosarcoma, fibrosarcoma and Ewing’s sarcoma.  Secondary bone tumors are metastases, which means they originate from the other parts of the body, and the cause may be any kind of cancer that may spread the malignant cells to bones via blood vessels. Bone metastases are especially often seen in prostate and breast cancer. People with malignant bone tumors often have symptoms such as bone fracture, bone pain, and a palpable swollen mass. Besides, patients may suffer from general symptoms such as fever, loss of weight and excessive sweating at night.",
  "Name": "Malignant bone tumor",
  "PossibleSymptoms": "Pain in the bones,Back pain,Fever,Weight loss,Sweating,Arm swelling,Joint pain,Bone fracture,Leg swelling",
  "ProfName": "Osteosarcoma",
  "Synonyms": "Bone tumor malignant",
  "TreatmentDescription": "The treatments of a malignant bone tumor will depend on the severity and type. However, it includes chemotherapy, radiation therapy or surgery. Surgery is often necessary to remove the affected tissues and the tumor. Chemotherapy and radiation therapy can be used to destroy the cancer cells. This will be used either to destroy remaining cancer cells after surgery or the shrink the tumor before surgery."
}, {
  "Description": "Pulmonary embolism occurs when a part of blood clot breaks off into the bloodstream and blocks one of the blood vessels in the lungs. In most cases, the clots are small and not deadly but they are able to damage parts of the lung. In contrast, however, a large clot can be deadly as it is able to stop blood flow to the lung. Treatment is needed immediately to reduce the risk of additional problems or to save the life of the affected person.",
  "DescriptionShort": "A pulmonary embolism is the sudden blockage of an important and big blood vessel in the lung. This is caused by a blood clot that has usually traveled from other parts of the body, very often from the legs.",
  "MedicalCondition": "Pulmonary embolism is caused by a blocked artery (major blood vessel) in the lungs. Such blockage is caused mostly by a blood clot that forms in a deep vein located in the leg and travels to the lungs where it becomes lodged in a smaller lung artery. Clots can also form in the deep veins of the pelvis or arms. Pulmonary embolisms can be fatal depending on the size of the clogged blood vessel in the lung. In rare cases, other substances can cause pulmonary embolism such as tumors caused by fast growing cancer cells, substances or air bubbles that penetrate from medical procedures, surgery, or trauma into the bloodstream. It can also be caused by fat that can be released into the bloodstream after severe burns, trauma, surgery, or some types of bone fractures, and minor masses of infectious material. Pulmonary embolism is characterized by shortness of breath that may occur suddenly, sharp and sudden chest pain that may become worse with coughing or deep breathing. Other symptoms include rapid breathing, fast heart rate, fainting, sweating, anxiety, heart palpitations, and coughing up foamy, pink mucus, or blood. It can be difficult to diagnose pulmonary embolism because its symptoms may be similar to or may coincide with other conditions such as a pneumonia, panic attack, heart attack, and asthma. In addition it makes it even more difficult to diagnose as some patients with pulmonary embolism do not show any symptoms.",
  "Name": "Obstruction of a pulmonary artery",
  "PossibleSymptoms": "Bloody cough,Chest pain,Chest tightness,Cough,Fast, deepened breathing,Blackening of vision,Palpitations,Shortness of breath,Unconsciousness, short,Breathing-related pains,Feeling faint",
  "ProfName": "Pulmonary embolism",
  "Synonyms": "",
  "TreatmentDescription": "Treatment of pulmonary embolism can include blood thinners to prevent existing blood clots from growing bigger and help prevent new ones from developing. If the patient has life-threatening and severe symptoms, treatment should be sometimes in a rather offensive and immediate manner to dissolve quickly blood clots or to remove them through surgery."
}, {
  "Description": "Chronic obstructive pulmonary disease is a common condition that affects mainly older or middle-aged adults who smoke. Many people do not realize they have it. The breathing problems tend to get gradually worse over time and can limit normal physical activities. An exposure over long time of period to lung irritants such as dust, air pollution or chemical vapours may contribute also to the condition. However,  a suitable treatment can help to keep the condition under control.",
  "DescriptionShort": "Chronic-obstructive pulmonary disease is a long-lasting (chronic) disease which is generally not inflammatory and affects the respiratory tract. It is caused by regular smoking in the majority of cases and can lead to lasting lung damage. As a result of this continuously worsening disease it becomes difficult to breathe for the affected person.",
  "MedicalCondition": "The majority of chronic-obstructive pulmonary disease cases are caused by smoking. The patient usually complains of coughing and catarrh, as well as shortness of breath associated with physical exercise, which can later happen while at rest.",
  "Name": "Chronic obstructive lung disease",
  "PossibleSymptoms": "Shortness of breath,Sputum,Chest tightness,Cough,Tiredness,Changes in the nails,Wheezing,Fast, deepened breathing,Cough with sputum,Absence of a pulse,Blue colored skin,Breathing-related pains",
  "ProfName": "Chronic obstructive pulmonary disease",
  "Synonyms": "Smoker’s lung",
  "TreatmentDescription": "Left untreated, chronic-obstructive pulmonary disease can lead to permanent damage in the lungs, including lung emphysema. Treatment consists of completely giving up smoking as well as taking medications to widen the respiratory tract (such as beta-2 adrenergic agonists and anticholinergics). It’s been shown that even after a few months of quitting, coughing and shortness of breath stop. It’s highly recommended that you quit smoking."
}, {
  "Description": "A stroke occurs when the blood supply to a part of the brain is severely reduced or interrupted, depriving a person's brain tissue of nutrients and oxygen. The cells of the brain start to die within minutes. Quick treatment is vital since it can minimize potential complications and brain damage.",
  "DescriptionShort": "A stroke is a sudden loss of brain function due to lack of blood flow to or hemorrhage in the brain. A stroke constitutes an emergency situation. It is a life-threatening, serious medical condition.",
  "MedicalCondition": "Lack of blood flow to an area of the brain is caused by arteriosclerotic plaque that has built up in the brain’s vessels, detach and  forming blood clots.  Another cause is a clot that originates in the heart (thrombus) due to a heart disorder, usually in the context of atrial fibrillation (see article on atrial fibrillation).  Hemorrhages occur predominantly in patients with high blood pressure or hemodilution. Depending on the area the stroke occurs in, patients may have different symptoms that sudden occur, such as paralysis, speech disorders, impaired sense of feeling, impaired awareness, or impaired sight.",
  "Name": "Stroke",
  "PossibleSymptoms": "Difficulty in speaking,Difficulty in swallowing,Double vision, acute-onset,Disorientation regarding time or place,Dizziness,Double vision,Facial paralysis,Headache,Immobilization,Impaired balance,Muscular weakness in the arm,Muscular weakness in the leg,Paralysis,Problems with the sense of touch in the face,Drowsiness,Tiredness,Visual field loss,Vomiting,Weakness or numbness on right or left side of body,Trouble understanding speech,Physical inactivity,Limited mobility of the leg,Night sweats,Difficulty with gait,Difficulty in finding words,Difficulty to concentrate,Unconsciousness, short,Blackening of vision",
  "ProfName": "Cerebrovascular accident",
  "Synonyms": "Brain attack",
  "TreatmentDescription": "Strokes require immediate medical attention, or permanent damage to the brain may increase and as well result in paralysis. The quicker the treatment begins after a stroke, the higher are the chances of recovery. Treatment involves dissolving clots with strong blood thinners and reestablishing blood flow to the affected area of the brain. The cause for the stroke needs to be discovered and treated accordingly."
}]

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

@app.route('/disease_info', methods = ['GET'])
@cross_origin()
def diseaseinfo():
    return jsonify({'disease_info':disease_info})

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

    result1=loaded_model1.predict_proba([data_input])[0][1]*100
    result2=loaded_model2.predict_proba([data_input])[0][1]*100
    result3=loaded_model3.predict_proba([data_input])[0][1]*100
    result4=loaded_model4.predict_proba([data_input])[0][1]*100
    result5=loaded_model5.predict_proba([data_input])[0][1]*100
    result6=loaded_model6.predict_proba([data_input])[0][1]*100
    result7=loaded_model7.predict_proba([data_input])[0][1]*100



    return jsonify({'resp':result1, 'artery':result2, 'liver':result3, 'malignancy':result4, 'pulmonary':result5, 'renal':result6, 'stroke':result7})
    
if __name__=='__main__':
    app.run(debug=True, port=8080)