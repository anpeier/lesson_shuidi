const  {mysql} = require("../../mysql");

module.exports = async ctx => {
  // 轮播图数据
  const banner = await mysql("nideshop_ad")
    .where({
      ad_position_id: 1
    })
    .select();
  // 分类图标
  const channel = await mysql("nideshop_channel").select()

  // 首页制造商列表
  const brandList = await mysql("nideshop_brand").select()

  ctx.body = {
    'banner': banner,
    'channel': channel,
    'brandList': brandList
  };
};
