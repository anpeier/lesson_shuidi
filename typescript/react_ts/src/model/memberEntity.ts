// .ts  .js
// js  vue   data -> vuex action ->  api -> mock | node server
//  ts 类型约束  超集  data -> vuex action ->  api -> mock | node server
//  重要的数据，出错 做类型的约束
export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}
