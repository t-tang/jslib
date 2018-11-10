const effect = (fn) => (arg) =>  {
    fn(arg)
    return arg
}

export default effect;