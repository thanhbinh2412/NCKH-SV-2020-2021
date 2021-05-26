<template>
  <div>
    <Header />
    <main>
      <Table />
    </main>
  </div>
</template>

<script>
import Header from "../components/header";
import Table from "../components/table";

export default {
  name: "xay",
  components: {
    Header,
    Table,
  },
  created() {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      window.location.href = "/login";
    }
  },
  mounted() {},
  methods: {},
};
</script>

<style scoped>
</style>