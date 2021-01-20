<template>
  <BaseLayout>
    <template v-slot:banner>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(image,item) in images" :key="item">
          <img :src="image" alt="">
        </el-carousel-item>
      </el-carousel>
    </template>
    <template v-slot:left>
      <img style="width: 100%" src="https://www.fonewalls.com/wp-content/uploads/2019/11/Space-Wallpaper-for-Phone-001.jpg" alt="">
    </template>
    <template v-slot:content>
      <div class="content">
        <p>Trang chủ / Công nghệ / Trên tay điện thoại Samsung Galaxy Buds Pro: đẹp và nhiều công nghệ</p>
        <img src="https://cdn57.androidauthority.net/wp-content/uploads/2021/01/Samsung-Galaxy-Buds-Pro_10-1200x675.jpg" alt="">
        <p>Galaxy Buds Pro là một chiếc tai nghe đặc biệt và thú vị của Samsung. Nó chị là một sản phẩm nối tiếp với một chiếc Galaxy Buds ra mắt trước đó nhưng được trang bị nhiều tính năng mơi hơn, nhiều công nghệ hơn và mục đích là làm sao nâng cao trải nghiệp của người dùng.</p>
      </div>
    </template>
    <template v-slot:right>
      <img style="width: 100%" src="https://www.fonewalls.com/wp-content/uploads/2019/11/Space-Wallpaper-for-Phone-003.jpg" alt="">
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";
export default {
  components: {
    BaseLayout
  },
  data() {
    return {
      images: [
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-1_044126531.jpg',
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-2_044126655.jpg',
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-3_044126905.jpg',
          'http://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-4_044127014.jpg'
      ]
    }
  },
  methods: {
    //
  },
}
</script>

<style scoped>
*{
  font-family: Calibri;
}
.content {
  padding: 20px;
  border-top: 1px solid darkgray;
}
.content p {
}
.content img {
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.el-carousel__item img {
  width: 100%;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
