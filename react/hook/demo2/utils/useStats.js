import { useState, useEffect } from 'react'; //共享状态的useState 方法 rect hooks

export default function useStats(url) {
  // console.log(url);
  // from input 双向绑定新写法 
  // react 很多写法都淘汰了
  const [stats, setStats] = useState(); 
  // 加载ajax loading
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // 封装state 的处理
  // react hooks 还有什么函数，可以在订阅了useState的
  // 组件 挂载上去后， 立即执行？ mounted() 
  // useEffect 相当于生命周期函数， 
  // state + lifecycle  -> react hooks  重要性
  // 独立到一个模块
  useEffect(() => {
  //  console.log('mounted'); 
    async function fectchData() {
      setLoading(true);
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
          setError(err);
        })
      // console.log(data);
      setStats(data);
      setLoading(false);
     
      
    }
    fectchData();
  }, [])

  return {
    stats,
    loading, 
    error
  }
}
