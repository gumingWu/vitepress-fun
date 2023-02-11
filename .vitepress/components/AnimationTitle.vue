<script setup lang="ts"></script>

<template>
  <div class="title">Vitepress Fun Animation Title</div>
</template>

<style scoped>
.title {
  font-size: 48px;
  line-height: 48px;
  text-align: center;
  margin-top: 20px;

  background: -webkit-linear-gradient(
    315deg,
    rgb(210, 86, 53) 10%,
    #647eff 50%,
    rgb(238, 224, 112) 90%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>
