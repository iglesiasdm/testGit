// Armado de un HashTable
let hashMaker = (arr, field) => arr.reduce( (prev, curr) => {
    //console.log( Array.isArray(prev[curr[field]]) )
    return curr[field] in prev
                ? {...prev, [curr[field]]: [...prev[curr[field]], curr]}
                : {...prev, [curr[field]]: [curr]}
                //? {...prev, [curr[field]]: [prev[curr[field]], curr]}
                //: {...prev, [curr[field]]: curr}
        
}, {});

let hash = (data, campo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(hashMaker(data, campo))
        }, 2000);
    })
};

export { hash }
