// curl -d "grant_type=client_credentials&client_id=CLIENT_ID&client_secret=CLIENT_SECRET" https://api.petfinder.com/v2/oauth2/token

// {"token_type":"Bearer","expires_in":3600,"access_token":"AUTHORIZATION_TOKEN"}             
// testing with curl
// curl -H "Authorization: Bearer AUTHORIZATION_TOKEN" GET https://api.petfinder.com/v2/organizations?location=20740&distance=100

const distanceInputButton = document.querySelector("#submitDistance");

distanceInputButton.addEventListener("click", function() {
  const distance = document.querySelector("input.input").value;
  const shelterEndpoint = `https://accesscontrolalloworiginall.herokuapp.com/https://api.petfinder.com/v2/organizations?location=20740&distance=${distance}`;

  fetch(shelterEndpoint, {
    headers: {
        Accept: 'application/json',
        Authorization: "Bearer AUTHORIZATION_TOKEN",
    }
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data);

        data.organizations.forEach( function(org) {console.log(org.address.address1)});  
        data.organizations.forEach( function(org) {console.log(org.address.address2)}); 
        data.organizations.forEach( function(org) {console.log(org.address.city)});
        data.organizations.forEach( function(org) {console.log(org.address.state)});
        data.organizations.forEach( function(org) {console.log(org.address.postcode)});
    })
    .catch(err => console.log(err))

//   if(navigator.geolocation) {

//     navigator.geolocation.getCurrentPosition((loc) => {
//         // console.log(loc);
//         location.lat = loc.coords.latitude;
//         location.lng = loc.coords.longitude;
//         const shelterEndpoint = `https://api.petfinder.com/v2/organizations?latitude=${location.lat}&longitude=${location.lng}&distance=${distance}`;
//         // console.log(shelterEndpoint);

//     },
//     (err) => {
//         console.log("User clicked no LOL");
//     }
//     )

//     } else {
//         console.log('geolocation is not supported :(');
//     }

})

function initGoogle() {
    var location = {
        lat: 40.000,
        lng: -79.000
    }
    var options = {
        center: location,
        zoom: 9
    }
    // If user allows browser to track location, get user location via navigator.geolocation.getCurrentPosition()
    if(navigator.geolocation) {
        console.log('geolocation is here!');
        navigator.geolocation.getCurrentPosition((loc) => {
            location.lat = loc.coords.latitude;
            location.lng = loc.coords.longitude
            map = new google.maps.Map(document.getElementById("map"), options);
        },
        (err) => {
            console.log("User clicked no lol");
            map = new google.maps.Map(document.getElementById("map"), options);
        }
        )

    } else {
        console.log('geolocation is not supported :(');
        map = new google.maps.Map(document.getElementById("map"), options);
    }
}







