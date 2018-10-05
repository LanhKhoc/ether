const R = require('ramda');

const matched = x => ({
  on: () => matched(x),
  otherwise: () => x,
})

const match = x => ({
  on: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
  otherwise: fn => fn(x),
})

// const compose = (...fns) => fns.reduceRight((prevFn, nextFn) => (...args) => nextFn(prevFn(...args)));
// const curry = (fn, N = fn.length) => {
// 	return (function nextCurried(prevArgs) {
// 		return (...nextArgs) => {
// 			const args = [...prevArgs, ...nextArgs];
// 			return args.length >= N ? fn(...args) : nextCurried(args);
// 		}
// 	}([]))
// }
// const map = curry((fn, target) => target.map(fn));

const maybeFold = R.curry((fnN, fnJ, m) => {
	return m.isNothing ? fnN() : fnJ(m.join());
})

const maybeBimap = R.curry((fnN, fnJ, m) => {
	return m.isNothing ? new Nothing() : new Just(fnJ(m.join()));
})

module.exports = {
	match,
	maybeFold,
	maybeBimap
}