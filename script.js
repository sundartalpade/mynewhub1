function getUsers(pageNumber){
    return fetch(`https://regres.in/api/users?page=${pageNumber}`)
    .then(function(resonse){
        return Response.json()
    })

.then(function(response){
    console.log(response.data[0].id)
    return response.data[0].id
})
}

function getSingle(id){
    return fetch(`https://regres.in/api/users/${id}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        return response.data
    })
}

































































































































































