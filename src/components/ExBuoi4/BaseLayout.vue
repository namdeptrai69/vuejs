<template>
  <div class="container">
    <header>
      <slot name="xxx"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
    }
  }
}
</script>

<style lang="scss" scoped>

</style>