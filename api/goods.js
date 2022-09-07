import fly from '@/utils/request.js'
// 获取商品信息
export const getGoodsListApi = (data) => {
  return fly.get('/goods/search', data)
}
