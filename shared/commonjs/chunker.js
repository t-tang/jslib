const numChunks = (anArray, chunkSize) =>
    Math.floor(anArray.length / chunkSize) +
    (anArray.length % chunkSize > 0 ? 1 : 0)

const chunker = (anArray, chunkSize) => (acc, cur, idx) =>
    acc.concat([anArray.slice(idx * chunkSize, idx * chunkSize + chunkSize)])

const chunk = (anArray, chunkSize) =>
    new Array(numChunks(anArray, chunkSize)).fill(null) 
        .reduce(chunker(anArray, chunkSize), [])

module.exports = chunk