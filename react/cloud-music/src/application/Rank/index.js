import React from 'react';
import {} from './style.js';


function Rank(props){
  // / =>  HOME
  // console.log(props)  react props如果在router 之中，
  // 那么他会包含history, location route(当前route.routes)
  const { route } = props;
  return (
    <div>
      Rank
    </div>
  );
}
 
export default React.memo(Rank);