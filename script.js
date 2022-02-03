const accessToken = "ACCESS_TOKEN";
const distanceInputButton = document.querySelector("#submitDistance");
const distanceInput = document.querySelector("input.input");

distanceInputButton.addEventListener("click", function() {
    
    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition((loc) => {
            // console.log(loc);
            location.lat = loc.coords.latitude;
            location.lng = loc.coords.longitude;
            let distance = distanceInput.value;
            let shelterEndpoint = `https://api.petfinder.com/v2/organizations?location=${location.lat},${location.lng}&distance=${distance}`;

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
                    const first10 = data.organizations.slice(0,10);
                    first10.forEach(function (org) {
                        console.log(
                        org.address.postcode,
                        org.name,
                        org.phone,
                        org.website
                        );

                        geocoder.geocode( {'address':org.address.postcode}, function(results, status) {
                            if (status == 'OK') {
                                // console.log(results[0].geometry.location)
                                map.setCenter(results[0].geometry.location);
                                var marker = new google.maps.Marker({
                                    map: map,
                                    position: results[0].geometry.location,
                                    optimized: false,
                                    // if true it's static
                                    animation: google.maps.Animation.DROP
                                });
                                marker.setLabel("label");
                                marker.addListener("click", (googleMapsEvent) => {
                                    document.getElementById('info').innerHTML = `Name: ${org.name} Phone: ${org.phone} Website: ${org.website}`
                                })

                                // marker.setTitle("title"); not working
                            } else {
                              alert('Geocode was not successful for the following reason: ' + status);
                            }
                          });
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
            geocoder = new google.maps.Geocoder();
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
