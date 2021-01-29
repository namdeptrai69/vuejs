<template>
  <el-row>
    <el-col :span="24">
      <slot name="banner"></slot>
    </el-col>
    <el-col :span="24" style="padding: 20px">
      <el-link href="#" target="_blank">Trang chủ</el-link>
      <el-dropdown>
        <span class="el-dropdown-link">
          Thể thao<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Bóng đá trong nước</el-dropdown-item>
          <el-dropdown-item>Bóng đá châu âu</el-dropdown-item>
          <el-dropdown-item>Võ thuật</el-dropdown-item>
          <el-dropdown-item>Các môn thể thao khác</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown>
        <span class="el-dropdown-link">
          Sức khỏe<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>Kiến thức giới tính</el-dropdown-item>
          <el-dropdown-item>Làm đẹp</el-dropdown-item>
          <el-dropdown-item>Đại dịch Covid-19</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-link href="#" target="_blank">Pháp luật</el-link>
      <el-link href="#" target="_blank">Du lịch</el-link>
      <el-link href="#" target="_blank">Giáo dục</el-link>
      <el-link href="#" target="_blank">Văn hóa</el-link>
      <el-link href="#" target="_blank" >Công nghệ</el-link>
      <router-link to="/giaitri">Giải trí</router-link>
    </el-col>
    <el-col :span="6">
      <slot name="left"></slot>
    </el-col>
    <el-col :span="12">
      <router-view/>
    </el-col>
    <el-col :span="6">
      <slot name="right"></slot>
    </el-col>
  </el-row>
</template>

<script>

export default {
  components: {
  },
}
</script>

<style scoped>
.el-dropdown{
  margin-right: 40px;
}
.el-dropdown-link {
  cursor: pointer;
  color: gray;
}
.el-dropdown-link:hover{
  color: black;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-link {
  margin-right: 40px;
  cursor: pointer;
}
</style>
