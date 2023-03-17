<template>
    <el-button type="primary" @click="GoToMain">Primary</el-button>
</template>

<script>
export default {
 methods: {
    GoToMain() {
      this.$router.push({ name: 'MainPage' });
    }
  }
}
</script>