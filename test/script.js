const googleDatabase = [
    'cars.com',
    'recipes.com',
    'flowers.com',
    'dogs.com',
    'carpics.com',
    'myfavcars.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches
};

// console.log(googleSearch('car', googleDatabase));

module.exports = googleSearch;