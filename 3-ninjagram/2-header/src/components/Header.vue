<template>
  <header class="header">
    <div class="action action-left">
      <!-- slot: chama um outro componente e troca esse por ele -->
      <slot name="action-left" />
    </div>
    <img class="logo" :src="require('../assets/logo.png')" alt="Logo"/>
    <div class="action action-right">
      <slot name="action-right" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: #354463;
  padding: .8em .8em;
  display: flex;
}
.logo {
  width: 80px;
  margin: auto;
  display: block;
}
.action {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
