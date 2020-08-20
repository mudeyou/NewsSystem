<template>
  <div class="container-center">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
