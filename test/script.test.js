const googleSearch = require('./script');

dbMock = [
    'house.com',
    'hats.com',
    'coffee.com',
    'housepics.com'
];

it('this is a test', () => {
    expect('hello').toBe('hello')
});

it('it is searching google', () => {
    expect(googleSearch('testtest', dbMock)).toEqual([])
    expect(googleSearch('house', dbMock)).toEqual(['house.com', 'housepics.com'])
});