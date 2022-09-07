import fly from '@/utils/request.js'
// 获取首页轮播图
export const getBannerApi = () => {
  return fly.get('/home/swiperdata')
}
/**
 * 获取分类数据
 * */
export const getNavList = () => {
  return fly.get('/home/catitems')
}
export const getFloorList = () => {
  return fly.get('/home/floordata')
}
