<template>
  <div class="alert-box">
    <strong>Error!</strong>
    <br />
    <slot />
  </div>
</template>

<style scoped>
.alert-box {
  color: rgb(102, 102, 102);
  border: 2px solid rgb(255, 0, 0);
  border-radius: 8px;
  padding: 32px;
  background-color: rgb(248, 248, 248);
  font-size: 20px;
  max-width: 520px;
}
  
strong {
  color: rgb(255, 0, 0);
  font-size: 24px;
}
</style>