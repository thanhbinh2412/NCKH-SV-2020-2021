<template>
  <div class="login" id="login">
    <div class="background">
      <div class="login-area">
        <form class="form" @submit.prevent>
          <h4>Chào bạn quay trở lại</h4>
          <p class="mb-5">Đăng nhập để tiếp tục</p>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            class="col form-control input"
            v-model="username"
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            class="col form-control input"
            v-model="password"
            required
          />
          <button class="btn btn-primary login-button" @click="onLogin()">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../services/auth-api";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      window.location.href = "/";
    }
  },
  methods: {
    async onLogin() {
      if (!this.username || !this.password) {
        alert("Chưa điền tên đăng nhập hoặc mật khẩu");
        return;
      }
      try {
        const { data } = await login({
          username: this.username,
          password: this.password,
        });
        if (data.message === "Loi") {
          alert(`Lỗi: Sai tên đăng nhập hoặc mật khẩu`);
          return;
        }
        if (!data?.data[0]) {
          return;
        }
        localStorage.setItem("userInfo", JSON.stringify(data.data[0]));
        window.location.href = "/";
      } catch (e) {
        console.log(e);
        alert(`Lỗi: ${e.message}`);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.login-area {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.form {
  padding: 32px;
  border-radius: 32px;
  background: #fff;
  position: absolute;
  top: 25%;
  left: 35%;
  right: 35%;
}

.input {
  width: 100%;
  margin-top: 16px;
}

.login-button {
  margin-top: 32px;
  width: 100%;
}

.left-side {
  border: 1px solid black;
}

.right-side {
  border: 1px solid black;
}

.banner {
  margin-top: 12.5%;
  text-align: center;
}

.banner-image {
  width: 400px;
}

.background {
  background-image: url("../assets/background.webp");
  height: 100vh;
}
</style>