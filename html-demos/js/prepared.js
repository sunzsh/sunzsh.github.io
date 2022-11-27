function Prepared(count, repeatable = false){


  let _preparedCount, _preparedResolve, _prepared, _callback, _this


  const reset = () => {
    _preparedCount = count
    _prepared = new Promise((resolve, reject) => {
      _preparedResolve = resolve
    })
    if (_callback) {
      _prepared.then(_callback)
    }
    return _preparedCount
  }
  const ready = (callback) => {
    _callback = callback
    _prepared.then(_callback)
    return _this
  }
  const submit = () => {
    _preparedCount--
    if (_preparedCount === 0) {
      _preparedResolve()
      if (repeatable) {
        reset();
      }
    }
    return _preparedCount;
  }
  _this = { reset, ready, submit }
  reset()
  return _this
}