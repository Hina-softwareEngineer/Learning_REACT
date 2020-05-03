const fetch = require('node-fetch');

const swapi = require('./script1');

it('calls swapi to get people with apromise', () => {
    // expect.assertions(2);
    swapi.getPeopleAsync(fetch).then(data => {
        expect(data.count).toEqual(82)
    });
});


it('swapi call', () => {
    // expect.assertions(1)
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(5)
       
    });
})

it('getpeople returns count and results', () => {
    const mockFetch = jest.fn()
    .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count : 82,
            results : [0,1,2,3,4,5]
        })
    }))

    expect.assertions(1)
    return swapi.getPeople(mockFetch).then(data =>{
        expect(mockFetch.mock.calls.length).toBe(1)
    })

    return expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people');
    
})