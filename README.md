# Pet Finder Map Search

An app that renders map with shelters using distance search and user browser location. Pet data from the [petfinder API](https://www.petfinder.com/developers/v2/docs/), map data from the [Google Maps API](https://developers.google.com/maps/documentation).

Not deployed yet because of complications of the API key (will explain in the bottom), but it works like this:

![alt text](img/pet_finder.gif)

A few notes if you are interested, and for my future self:

## Google Maps API
Google Maps APIs are a little complicated and the documentations are not always beginner-friendly. Here're a few things I learned:

### Geocoding API vs Geocoding Class in Maps JavaScript API
Yes, they are separate. The [Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) deals with static known addresses and the [Geocoder class](https://developers.google.com/maps/documentation/javascript/geocoding) provided within the Maps JavaScript API geocode dynamically from user input. So in my case I need the latter.

### Accessing the Geocoding Class 
"You access the Google Maps API geocoding service within your code via the google.maps.Geocoder constructor object," the documentation says. 

If you're a beginner like me, it might not click immediately, so here's what it means in code:

    Geocoder = new google.maps.Geocoder();

Then you can pass in the location information in an object into the Geocoder.geocode() method like this:

    Geocoder.geocode(GeocoderRequest)


## About hiding the Google Maps API key
To be able to use the API, you'd have to have credit card info on file, so you don't want to hard code it as a variable and push it to Github. 

I tried storing it in dotenv file but it was impossible to access it as a variable in the JavaScript code because the way the Google API works is you reference the key in the front end, in a script tag in the html file like this:

    <script src="https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGoogle"></script>

So an engineer friend suggested that I store the key in an environment.js file, create a script element with the src attribute and append it to the document:

    const myScriptTag = document.createElement('script');
    myScriptTag.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGoogle`;
    myScriptTag.setAttribute("async", "");
    document.body.appendChild(myScriptTag);


## About refreshing the access token for calls

