fetch ('https://codecyprus.org/th/api/list')
  .then(treasureHunts=>treasureHunts.json());

/list = https://codecyprus.org/th/api/list;
/start = https://codecyprus.org/th/api/start; 
/question = https://codecyprus.org/th/api/question;
/answer = https://codecyprus.org/th/api/answer; 
/location = https://codecyprus.org/th/api/location;
/skip = https://codecyprus.org/th/api/skip; 
/score = https://codecyprus.org/th/api/score; 
/leaderboard = https://codecyprus.org/th/api/leaderboard;



//Function to access location
function getPosition(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    alert("Geolocation is not supported by your browser.");
  }
}

//Function to show position on console
function showPosition(position) {
  console.log("Latitude: " + position.coords.latitude + ", Longitude: " +position.coords.longitude);
}
