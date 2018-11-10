
const Either = {
    Left: (value) => ({
        isLeft: true,
        isRight: false,
        leftValue: value,
        flatMap: (eitherFn) => Either.Left(value),
        fold: (leftEitherFn, rightEitherFn) => leftEitherFn(value),
        getOrElse: (elseValue) => elseValue,
        map: (fn) => Either.Left(value)
    }),
    Right: (value) => ({
        isLeft: false,
        isRight: true,
        rightValue: value,
        flatMap: (eitherFn) => eitherFn(value),
        fold: (leftEitherFn, rightEitherFn) => rightEitherFn(value),
        getOrElse: () => value,
        map: (fn) => Either.Right(fn(value))
    })
}

module.exports = Either