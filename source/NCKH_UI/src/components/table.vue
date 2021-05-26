<template>
  <div class="container mt-5">
    <h3>Danh sách gói thầu</h3>

    <table class="table table-striped table-hover">
      <thead class="bg-primary text-white">
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Gói thầu</th>
          <th scope="col">Bên mời thầu</th>
          <th scope="col">Công bố</th>
          <th scope="col">Đóng thầu</th>
          <th scope="col">Thời gian còn lại</th>
          <th scope="col">Trạng thái</th>
          <th scope="col">Chi tiết</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in packages" :key="item.ID">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.TEN_GOI_THAU }}</td>
          <td>{{ item.benThau }}</td>
          <td>{{ item.NGAY_CONG_BO }}</td>
          <td>{{ item.NGAY_DONG_THAU }}</td>
          <td>{{ item.remain }} ngày</td>
          <td>
            {{ item.IS_CONG_BO ? "Đang mở" : item.IS_DONG_THAU && "Đã đóng" }}
          </td>
          <th scope="col">
            <router-link to="/" exact>
              <button class="btn btn-primary">Chi tiết</button>
            </router-link>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getPackages } from "../services/package-api";
import moment from "moment";

export default {
  data() {
    return {
      packages: [],
    };
  },
  async mounted() {
    try {
      const result = await getPackages({ MA_DU_AN: "DA000001" });
      this.packages = result.data.data.map((item) => ({
        ...item,
        NGAY_CONG_BO: moment(item.NGAY_CONG_BO).format("DD/MM/YYYY"),
        NGAY_DONG_THAU: moment(item.NGAY_DONG_THAU).format("DD/MM/YYYY"),
        remain: moment(item.NGAY_DONG_THAU).diff(item.NGAY_CONG_BO, "days"),
      }));
    } catch (e) {
      alert(`Lỗi: ${e.message}`);
    }
  },
};
</script>

<style>
</style>