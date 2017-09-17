const add = fns => (...f) => {
  f.map((fn, index) => dedupe(fns, fn, index))
  fns.push(...f)
}

const dedupe = (fns, fn, index) =>
  fns.indexOf(fn) !== -1
    ? delete f[index]
    : void 0

const remove = fns => (...f) =>
  f.map(fn => delete fns[fns.indexOf(fn)])

const run = fns => (...args) => {
  fns.map(fn => {
    if (fn && {}.toString.call(fn) === '[object Function]') {
      fn(...args)
    }
  })
}

function main(...f) {
  const fns = []
  add(fns)(...f)
  return {
      add: add(fns)
    , remove: remove(fns)
    , run: run(fns)
  }
}

export default main
