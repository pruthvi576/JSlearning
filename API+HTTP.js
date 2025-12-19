fetch("https://randomuser.me/api/?results=5")
    .then((raw) => raw.json())
    .then((data) => console.log(data.results[0].name.first));

// summary: This code demonstrates how to use the Fetch API to make an HTTP GET request to a public API that returns random user data. It processes the response as JSON and logs the first name of the first user in the results array.