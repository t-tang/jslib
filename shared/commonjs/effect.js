const effect = (fn) => (arg) =>  {
    fn(arg)
    return arg
}

module.exports = effect