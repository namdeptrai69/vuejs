<template>
  <BaseLayout>

    <template v-slot:xxx>
      <h1>hihi</h1>
      <el-button type="primary">Primary</el-button>
    </template>

    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>
</template>

<script>
import BaseLayout from "./BaseLayout";

export default {
  components: {
    BaseLayout,
  },
  data () {
    return {
      message: '',
    }
  }
}
</script>

<style lang="scss" scoped>

</style>