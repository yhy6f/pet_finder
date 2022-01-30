const accessToken = "YOUR_TOKEN"
const distanceInputButton = document.querySelector("#submitDistance");

distanceInputButton.addEventListener("click", function() {
    const distance = document.querySelector("input.input").value;

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((loc) => {
            // console.log(loc);
            location.lat = loc.coords.latitude;
            location.lng = loc.coords.longitude;
            const shelterEndpoint = `https://api.petfinder.com/v2/organizations?latitude=${location.lat}&longitude=${location.lng}&distance=${distance}`;
            console.log(shelterEndpoint);
            fetch(shelterEndpoint, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data);
            
                    data.organizations.forEach(function (org) {
                        console.log(
                        "org.address.address1: ",
                        org.address.address1,
                        "org.address.address2: ",
                        org.address.address2,
                        "org.address.city: ",
                        org.address.city,
                        "org.address.state: ",
                        org.address.state,
                        "org.address.postcode",
                        org.address.postcode
                        );
                    });
                })
                .catch(err => console.log(err))
            })
    } else {
            console.log('geolocation is not supported :(');
    }
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