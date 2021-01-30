<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80vh;
    "
  >
    <div class="spin"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.spin {
  display: block;
  width: 100px;
  height: 100px;
  border: 3px solid transparent;
  border-radius: 200px;
  border-top-color: #ff8800;
  border-bottom-color: #ff8800;
  animation: rotate360 1s cubic-bezier(0.46, 0.11, 0.31, 1.12) infinite;
}

@keyframes rotate360 {
  0% {
    transform: rotateZ(360deg);
  }
  50% {
    border-top-color: #ffce95;
    border-bottom-color: #ffce95;
    width: 80px;
    height: 80px;
  }
}
</style>