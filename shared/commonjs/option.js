
const evaluate = (thing) => typeof thing === 'function' ? thing() : thing

const Option = {
    None: {
        getOrElse: (els) => evaluate(els),
        orElse: (els) => evaluate(els),
        exists: (predicate) => false,
        filter: (predicate) => Option.None,
        map: (fn) => Option.None
    },
    Some: (value) => ({
        getOrElse: (els) => value,
        orElse: (els) => Option.Some(value),
        exists: (predicate) => predicate(value),
        filter: (predicate) => predicate(value) ? Option.Some(value) : Option.None,
        map: (fn) => Option.Some(fn(value))
    })
}

module.exports = Option