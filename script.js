// curl -d "grant_type=client_credentials&client_id=CLIENT_ID&client_secret=CLIENT_SECRET  " https://api.petfinder.com/v2/oauth2/token

// {"token_type":"Bearer","expires_in":3600,"access_token":"AUTHORIZATION_TOKEN"}             
// testing with curl
// curl -H "Authorization: Bearer AUTHORIZATION_TOKEN" GET https://api.petfinder.com/v2/organizations?location=20740&distance=100

fetch('https://api.petfinder.com/v2/organizations?location=20740&distance=100', {
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer AUTHORIZATION_TOKEN',
    }
    })
    .then(resp => resp.json())
    .then( json => console.log(json))
    .catch(err => console.log(err))

