// curl -d "grant_type=client_credentials&client_id=CLIENT_ID&client_secret=CLIENT_SECRET" https://api.petfinder.com/v2/oauth2/token

// {"token_type":"Bearer","expires_in":3600,"access_token":"AUTHORIZATION_TOKEN"}             
// testing with curl
// curl -H "Authorization: Bearer AUTHORIZATION_TOKEN" GET https://api.petfinder.com/v2/organizations?location=20740&distance=100

fetch('https://api.petfinder.com/v2/organizations?location=20740&distance=100', {
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1VUFkd3Q1S2lHREgxeXhhNXpZUUo0blI3bXBTOU5DNEk0U2xoZjdMY1lZQ0cwQW45bCIsImp0aSI6Ijk1ZWNjMjk4NTVhMzM4MmFlZGM5MDA0MmVhM2RlN2E0ZGM4NTdiOWQ4NDI1OGQwZGU5M2U5YzU3ZGM4YzViMzM4MDc1ZTM2NzE4NGMzNGE0IiwiaWF0IjoxNjQyNzE5NjAzLCJuYmYiOjE2NDI3MTk2MDMsImV4cCI6MTY0MjcyMzIwMywic3ViIjoiIiwic2NvcGVzIjpbXX0.yKbrG79Uj62AhQeBAsL4libaMG5mGfEfL7KMcLawUzCr2nN-DZA-8CeWXfDmvnHvmZcn7ubkm-YkWVY8Cv6ofbFVKlsLn-yX_PRcLjX7Ek10rghfgT3rk0Fj67oNCjojMXqVx4xOEeLT1BkxCWwPkOf4qFAzJzCBRKhOqRMyF_lv6kvDpgzv3ydrIoJkWP9Ud1Dx6qrmVWGIKJXd2kY1kRB3fWV7xq65CkLUo5Kehuai8yqEOBiNDF56UeABXvqc7Lobiqo8fAa_M35Nsz7lnamuBv4IAIqNfXMhiew-uMDZ6JE9lhIuzIppkduxA_q5ltda0Tijm3iaIARbmjJStw',
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
