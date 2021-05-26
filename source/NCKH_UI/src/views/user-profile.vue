<template>
  <div>
    <Header />

    <div class="container mt-5">
      <table class="table table-hover">
        <tbody>
          <tr>
            <td>Họ và tên</td>
            <td>{{ userInfo.TEN_CA_NHAN || "Chưa có" }}</td>
          </tr>
          <tr>
            <td>Địa chỉ</td>
            <td>{{ userInfo.DIA_CHI || "Chưa có" }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ userInfo.EMAIL || "Chưa có" }}</td>
          </tr>
          <tr>
            <td>Mã định danh</td>
            <td>{{ userInfo.MA_DINH_DANH || "Chưa có" }}</td>
          </tr>
          <tr>
            <td>Mã số thuế</td>
            <td>{{ userInfo.MA_SO_THUE || "Chưa có" }}</td>
          </tr>
          <tr>
            <td>Số đăng ký kinh doanh</td>
            <td>{{ userInfo.SO_DKKD || "Chưa có" }}</td>
          </tr>
          <tr>
            <td>Tên tổ chức</td>
            <td>{{ userInfo.TEN_TO_CHUC || "Chưa có" }}</td>
          </tr>
          <tr>
            <td>Tỉnh / thành phố</td>
            <td>{{ userInfo.TINH_TP || "Chưa có" }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";

export default {
  components: {
    Header,
  },
  created() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(this.userInfo);
  },
  data() {
    return {
      userInfo: null,
    };
  },
};
</script>

<style scoped>
.table {
  width: 50% !important;
  margin: 0 auto;
}
</style>