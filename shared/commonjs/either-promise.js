
// Array[Promise[Either]] -> Promise[Array[Either]]
// If any promise failed, Promise[Array[Either]] contains first failure
const mapAll = (eitherPromiseArray) =>
    Promise.all(eitherPromiseArray).then(values =>
        value.every(either => either.isRight) ?
        values :
        values.find(either => either.isLeft)
)

const EitherPromise = (eitherPromise) => ({
    flatMap: (eitherFn) => EitherPromise(eitherPromise.then(either => either.flatMap(eitherFn))),
    map: (fn) => EitherPromise(eitherPromise.then(either => either.map(fn))),
    flatMapAll: (eitherFn) => EitherPromise(eitherPromise.then(either => either.flatMap(eitherFn)).then(mapAll)),
    toPromise: eitherPromise
})

module.exports = EitherPromise