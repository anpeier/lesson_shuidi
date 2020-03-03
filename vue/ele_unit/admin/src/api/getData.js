/**
 * API定义集合文件，
 * @param {*} data 
 */
export const login = (data) => {
  return new Promise((resolve, reject) => {
    // http://127.0.0.1:8080/  跨项目 
    // 跨机房 跨域了吗？
    fetch('/admin/login', {
      method: 'POST', //请求头
      body: JSON.stringify(data) //请求体 request body
    })
    .then(data => data.json())
    .then(data => {
      console.log(data, '----------')
      resolve(data)
    })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  })
}