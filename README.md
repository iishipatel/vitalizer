<p align="center">
  <img src="logo1.png">
</p>

## Inspiration
One of the biggest inspirations for this project was the entire scenario revolving around getting **health check-ups** and **reports**. Nowadays, it has become increasingly difficult and expensive to get regular and accurate checkups. We wanted a product that would generate medical reports based on minimal requirements and most of all, would be free of cost for the users.

## What it does
With our product users can check the **probability** of having a rather life-threatening disease by just **checking their vitals at home**. Our **AI-curated model** carefully analyzes user fed data and gives a probable prediction of the severity of the ailment. We generate a tailored report for the users based upon vitals that can easily be measured in the comfort of their homes. The simple parameters that we consider are your, age, gender, height, weight, body temperature, heart rate, and blood pressure.

This way we let the user know if he/she really needs to rush to the hospital or is just under the weather. Our model gives the user a probable score of having diseases which combined with their symptoms can help them make the decision of going to hospitals in these tough times. To help with the decision making we also provide **thorough information about the disease** for user satisfaction. An exhaustive list of symptoms to cross-check your situation. We believe in providing the smoothest User Experience as our target audience varies from the curious kid to the most elderly. Hence, our web app follows a **simple UI** and **easy to navigate UX**.

## How we built it
We used the data set from the clinical data from MIMIC-II. In this data set, we predict the probability of having serious life-threatening diseases on the basis of vitals such as height, weight, bp, heart rate, and body temperature. Since the data set was tricky to handle with a lot of missing data as well as different formats we used advanced featured engineering to train it upon a support vector machine classification algorithm. Then we use the confidence score for predicting the probability of having a certain disease. For feature engineering, we use Numpy and Pandas, and for the model training, we used Scikit learn. We made our own API using a flask to make these predictions. For disease information and extensive symptoms recall, we use used APIMEDIC's API. For nearby doctor search, we used BetterDoctor's API and used it alongside google maps. Now coming to the front end, we linked the above-mentioned APIs in our web interface. We made a simple and easy to understand UI to take input from the user about his or her vitals and then output the predictions. We made sure the UI/UX is very neat understandable for easy understanding for a vast range of users. We have also added a light/dark toggle :)



## Accomplishments that we're proud of
1. Support Vector Regression based prediction for the probability of disease
2. Average Accuracy: 88.40 % on MIMIC-II dataset
3. Making accurate prediction through minimal vitals using advance
4. Feature engineering
5. Creating our own API with this custom model
6. Attractive dashboard display
7. Easy to navigate user experience
8. Data fed anonymously to maintain the privacy of medical-related information
9. Locating nearby health consultants/doctors

## What's next for Vitalizer
 We want to make predictions for more diseases in the future. And expand into collecting data of more nearby doctors. 
 
 ### Check out the website at : http://vitalizer.tech/
