export default {
  Query: {
    async githubURL(_root:any,{},{connector}) {
      return await connector.utils.githubURL()
    }
  }
}