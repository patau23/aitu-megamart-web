<template>
  <div>
    <h1>Page not found</h1>
    <span class="bold">
      u can go to
      <router-link class="bolded-link" to="/">home page</router-link>
      or u can go back:
      <button class="back-btn" @click="$router.go(-1)">GO BACK</button>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.bold {
  font-weight: 600;
}
.bolded-link {
  font-weight: 600;
  text-decoration: underline;
  color: black;
}
</style>
