'use strict'

import sideEffect from './side-effect.js';

const timeout = (delay, fn) =>
    new Promise((resolve) => setTimeout(() => resolve(fn()), delay))

async function logit(promise) { console.log(await promise) }
logit(timeout(10000, () => 100).then(sideEffect(console.log)))

module.exports = timeout