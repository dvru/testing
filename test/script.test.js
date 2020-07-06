const googleSearch = require('./script');

dbMock = [
    'house.com',
    'hats.com',
    'coffee.com',
    'housepics.com'
];

describe('googleSearch', () => {
    it('this is a test', () => {
        expect('hello').toBe('hello')
    });
    
    it('it is searching google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('house', dbMock)).toEqual(['house.com', 'housepics.com'])
    });
    
    it('work undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});



