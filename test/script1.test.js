const fetch = require('node-fetch');

const swapi = require('./script1');

it('calls swapi to get people with apromise', () => {
    // expect.assertions(1);
    swapi.getPeopleAsync(fetch).then(data => {
        expect(data.count).toEqual(82)
    });
});


it('swapi call', () => {
    // expect.assertions(2)
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(5)
       
    });
})

it('getpeople returns count and results', () => {
    const mockFetch = jest.fn()
    
})