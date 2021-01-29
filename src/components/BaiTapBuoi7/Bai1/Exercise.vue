<template>
    <div class="container">
        <List/>
        <Card/>
    </div>
</template>

<script>
  import List from './List'
  import Card from './Card'

  export default {
    name: 'Exercise',
    components: {
      List,
      Card
    }
  }
</script>

<style lang="scss" scoped>
    $colorDefault: #253036;

    .container {
        height: 100vh;
        padding: 24px;
        color: $colorDefault;
        display: flex;
        align-items: flex-start;

    }
</style>