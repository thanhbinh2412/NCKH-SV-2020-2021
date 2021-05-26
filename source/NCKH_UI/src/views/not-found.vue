<template>
  <div>
    <Header />
    <main>
      <h1 class="text-center">404 | Not Found</h1>
    </main>
  </div>
</template>

<script>
import Header from "../components/header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 12.5%;
}
</style>