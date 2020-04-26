// interface + type
type HttpMethods = 'get' | 'GET' | 'post' | 'POST' | 'DELETE' | 'delete';
type FuncType = (url: string, method: HttpMethods) => Promise<any>; // 特别的函数 return Promise
const fetchData: FuncType = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { fetchData };
