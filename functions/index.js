const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.analyzeText = functions.database.ref('Messages/{key}/text').onWrite(event=>{
  if(!event.data.val()){
    return null;
  }
  const key = event.params.key;
  const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

  let creds = {
      "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
      "username": "1115bafc-e711-4e1d-8603-1f69d3abfcf7",
      "password": "NPmWUXbkXcyg"
    };

  let tone_analyzer = new ToneAnalyzerV3({
    username: creds.username,
    password: creds.password,
    version_date: "2016-05-19"
  });

  let params = {
    text: event.data.val(),
    tones: "emotion"
  };

  return tone_analyzer.tone(params, function(error, response) {
    if (error){
      console.log('error:', error);
      return null;
    }else {
      console.log(JSON.stringify(response, null, 2));
      return admin.database().ref("Messages/").child(key).child("Response").set(response).then(function() {
        return admin.database().ref("Messages/").child(key).remove();
      });
    }
  });

});
