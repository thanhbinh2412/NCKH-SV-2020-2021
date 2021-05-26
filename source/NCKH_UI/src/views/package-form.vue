<template>
  <div>
    <Header />
    <form class="container custom-form mt-5" @submit.prevent>
      <div class="form-group">
        <label for="packageId">Mã định danh</label>
        <input
          type="text"
          class="form-control"
          id="packageId"
          placeholder="Nhập mã nhà thầu"
          v-model="packageId"
        />
      </div>
      <div class="form-group">
        <label for="packageName">Tên gói thầu</label>
        <input
          type="text"
          class="form-control"
          id="packageName"
          placeholder="Nhập gói nhà thầu"
          v-model="packageName"
        />
      </div>
      <div class="form-group">
        <label for="packageHost">Ngày công bố</label>
        <input
          type="date"
          class="form-control"
          id="packageHost"
          placeholder="Nhập gói nhà thầu"
          v-model="releaseDate"
        />
      </div>
      <div class="form-group">
        <label for="packageHost">Ngày đóng thầu</label>
        <input
          type="date"
          class="form-control"
          id="packageHost"
          placeholder="Nhập gói nhà thầu"
          v-model="closeDate"
        />
      </div>
      <button class="btn btn-primary" @click="addPackage()">Thêm mới</button>
    </form>
  </div>
</template>

<script>
import Header from "../components/header";
import { addPackage } from "../services/package-api";
import moment from "moment";

export default {
  components: {
    Header,
  },
  data() {
    console.log(this.data);
    return {
      packageId: "",
      packageName: "",
      releaseDate: "",
      closeDate: "",
    };
  },
  methods: {
    async addPackage() {
      const releaseDateTimestamp = moment(this.releaseDate).unix();
      const closeDateTimestamp = moment(this.closeDate).unix();

      if (closeDateTimestamp - releaseDateTimestamp <= 0) {
        alert(`Lỗi: Ngày đóng thầu không thể sớm hơn ngày công bố`);
        return;
      }

      try {
        const result = await addPackage({
          packageId: this.packageId,
          packageName: this.packageName,
          releaseDate: moment(this.releaseDate).format("DD/MM/YYYY"),
          closeDate: moment(this.closeDate).format("DD/MM/YYYY"),
        });

        if (result.data.message === "Thanh Cong") {
          alert("Thêm thành công");
          this.packageId = "";
          this.packageName = "";
          this.releaseDate = "";
          this.closeDate = "";
        }
      } catch (e) {
        alert(`Lỗi: ${e.message}`);
      }
    },
  },
};
</script>

<style scoped>
.custom-form {
  width: 50%;
}
</style>