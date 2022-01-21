// curl -d "grant_type=client_credentials&client_id=CLIENT_ID&client_secret=CLIENT_SECRET" https://api.petfinder.com/v2/oauth2/token

// {"token_type":"Bearer","expires_in":3600,"access_token":"AUTHORIZATION_TOKEN"}             
// testing with curl
// curl -H "Authorization: Bearer AUTHORIZATION_TOKEN" GET https://api.petfinder.com/v2/organizations?location=20740&distance=100

const distanceInputButton = document.querySelector("#submitDistance");

distanceInputButton.addEventListener("click", function() {
  const distance = document.querySelector("input.input").value;
  const shelterEndpoint = `https://api.petfinder.com/v2/organizations?location=20740&distance=${distance}`;
  console.log(shelterEndpoint);

  fetch(shelterEndpoint, {
    headers: {
        Accept: 'application/json',
        Authorization: AUTHORIZATION_TOKEN,
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

})





