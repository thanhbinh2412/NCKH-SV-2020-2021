<template>
  <div>
    <Header />
    <form
      enctype="multipart/form-data"
      class="container custom-form mt-5"
      @submit.prevent="uploadfile"
    >
      <div class="form-group">
        <label for="contractorName">Mã nhà thầu</label>
        <input
          type="text"
          class="form-control"
          id="contractorName"
          placeholder="Nhập tên nhà thầu"
          v-model="contractorName"
        />
      </div>
      <div class="form-group">
        <label for="contractorName">Tên nhà thầu</label>
        <input
          type="text"
          class="form-control"
          id="contractorName"
          placeholder="Nhập tên nhà thầu"
          v-model="contractorName"
        />
      </div>
      <div class="form-group">
        <label for="projectName">Nhập tên dự án</label>
        <input
          type="text"
          class="form-control"
          id="projectName"
          placeholder="Nhập tên dự án"
          v-model="projectName"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlFile1">Hồ sơ thầu xây dựng</label>
        <input
          type="file"
          class="form-control-file"
          id="exampleFormControlFile1"
          @change="onImageChange"
          name="file"
        />
      </div>
      <button class="btn btn-primary">Tải lên</button>
    </form>
  </div>
</template>

<script>
import Header from "../components/header";
import { uploadFile } from "../services/file-api";

export default {
  components: {
    Header,
  },
  data() {
    console.log(this.data);
    return {
      contractorName: "",
      projectName: "",
      files: null,
    };
  },
  methods: {
    onImageChange(e) {
      this.files = e.target.files;
    },
    async uploadfile() {
      const formData = new FormData();
      formData.append("file", this.files);
      try {
        const result = await uploadFile(formData);
        console.log("result", result);
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