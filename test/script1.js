const fetch = require('node-fetch');

const getPeople = fetch=> {
    return fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(
        data=> {

            return {
                count: data.count,
                results : data.results
            }
        }
    )
    .catch(e =>{
        console.log('ehtis is a ',e)
    })

}

console.log(getPeople(fetch));


const getPeopleAsync = async (fetch) => {
    const getRequest =await fetch('https://swapi.dev/api/people')
    const data =await getRequest.json();
            return {
                count: data.count,
                results : data.results
            }

}

console.log(getPeopleAsync(fetch));

module.exports={
    getPeople, 
    getPeopleAsync
}