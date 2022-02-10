function refreshToken() {
let options = {
    headers:{
        grant_type:"client_credentials",
        client_id:"5UAdwt5KiGDH1yxa5zYQJ4nR7mpS9NC4I4Slhf7LcYYCG0An9l",
        client_secret:"ClM1upnfyamGeN9pQVSNyMIedgPXwbcQGaScdT0S"
    }
}

    fetch("https://api.petfinder.com/v2/oauth2/token",options).then(
        response => response.json()
    ).then(
        data => data.xyz
    )
}
// the goal is to have refreshToken return a new access token every hour

setTimeout(
    () => {
        const accessToken = refreshToken()
    },
    3600
);