<template>
  <view>
    <van-card :thumb="item.goods_small_logo" v-for="item in goods" :key="item.goods_id"
      :thumb-link="`/subpkg/goods_detail/goods_detail?id=${item.goods_id}`" :price="item.goods_price|toFixed"
      :title="item.goods_name" />
  </view>
</template>
<script>
  import {
    getGoodsListApi
  } from '../../api/goods.js'
  export default {
    data() {
      return {
        queryObj: {
          // 查询关键词
          query: '',
          // 商品分类Id
          cid: '',
          // 页码值
          pagenum: 1,
          // 每页显示多少条数据
          pagesize: 10
        },
        goods: [],
        total: 0,
        isLoading: false
      };
    },
    methods: {
      async loadGoodsList() {
        this.isloading = true
        const {
          message
        } = await getGoodsListApi(this.queryObj)
        this.isloading = false
        this.goods = [...this.goods, ...message.goods]
        this.total = message.total
        uni.stopPullDownRefresh()
      }
    },
    onLoad(options) {
      this.queryObj.query = options.query
      this.loadGoodsList()
    },
    onPullDownRefresh() {
      this.loadGoodsList()
    },
    // 触底的事件
    onReachBottom() {
      if (this.isLoading) return
      // 让页码值自增 +1
      this.queryObj.pagenum += 1
      // 重新获取列表数据
      this.loadGoodsList()
    }

  }
</script>

<style lang="less">

</style>
