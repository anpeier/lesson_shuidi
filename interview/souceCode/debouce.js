function debounce(func, time) {
  let timer = null;
  return function () {
    let ctx = this;
    let args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(ctx, args);
    }, time);
  };
}

function debounce2(fn, delay) {
  let timeout;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fn, delay);
  };
}
