const { mysql } = require("../../mysql");

module.exports = async ctx => {
  // 轮播图数据
  const banner = await mysql("nideshop_ad")
    .where({
      ad_position_id: 1
    })
    .select();
  // 分类图标
  const channel = await mysql("nideshop_channel").select();

  // 首页制造商列表
  const brandList = await mysql("nideshop_brand")
    .where({
      is_new: 1
    })
    .orderBy("new_sort_order", "asc")
    .limit(4)
    .select();

  // 新品首发
  const newGoods = await mysql("nideshop_goods")
    .whereIn("id", [1181000, 1135002, 1134030, 1134032])
    .andWhere("is_new", 1)
    .select();

  ctx.body = {
    banner: banner,
    channel: channel,
    brandList: brandList,
    newGoods: newGoods
  };
};
