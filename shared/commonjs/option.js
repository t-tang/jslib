
const evaluate = (fnOrValue) => typeof fnOrValue === 'function' ? fnOrValue() : fnOrValue

const Option = {
    None: {
        getOrElse: (fnOrValue) => evaluate(fnOrValue),
        filter: (predicate) => Option.None,
        flatMap: (optFn) => Option.None,
        map: (fn) => Option.None
    },
    Some: (value) => ({
        getOrElse: (fnOrValue) => value,
        filter: (predicate) => predicate(value) ? Option.Some(value) : Option.None,
        flatMap: (optFn) => optFn(value),
        map: (fn) => Option.Some(fn(value))
    })
}

module.exports = Option