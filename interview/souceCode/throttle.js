function throttle(fn, time) {
  let task = false;
  return () => {
    if (!task) {
      task = true;
      setTimeout(() => {
        fn();
        task = false;
      }, time);
    }
  };
}
