// Setting part of URL that won't change
const remoteURL = "http://localhost:5002"

export default {

  // fetches the data of a single animal from the API using the id as an argument. .then takes the result and converts it to json format.
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },

  // fetches the data on all the animals in the API and .then takes the result and converts it to json format.
  getAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },

  // targets the data on a single animal using the id as an argument and the delete method is called to delete the animals' object from the API. .then takes the result and converts it to json format. We aren't currently using the result for anything.
  delete(id) {
    return fetch(`http://localhost:5002/animals/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
  post(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAnimal)
    }).then(data => data.json())
},

// updates the data on a single animal using the PUT method.
update(editedAnimal) {
  return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
    method: "PUT",
    // Telling the server what data type to expect.
    headers: {
      "Content-Type": "application/json"
    },
    // .stringify turns the editedAnimal object into a string to pass it over the internet.
    body: JSON.stringify(editedAnimal)
    // then the response is converted to json format turning it back into an object.
  }).then(data => data.json());
}
}