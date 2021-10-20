const debounce = (fn, ms) => {
  console.log('debounce')
  let timeout
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments)
    }
    clearTimeout(timeout)
    timeout = setTimeout(fnCall, ms)
  }
}

export default debounce
