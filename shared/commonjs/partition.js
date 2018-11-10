const partition = (filter) => (anArray) =>
    anArray.reduce((acc, item) => filter(item) ?
            { left: acc.left, right: acc.right.concat([item]) } :
            { left: acc.left.concat([item]), right: acc.right }
    )

module.exports = partition