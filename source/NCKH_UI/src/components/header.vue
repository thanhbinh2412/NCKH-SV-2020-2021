<template>
  <div>
    <!-- v-show="userInfo.ROLE !== 2" -->
    <!---------------------------------- START NAV ---------------------------------->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/" exact>Đấu thầu</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact active-class="active">
              Trang chủ
            </router-link>
          </li>
          <li  class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Gói thầu
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/package/new" class="dropdown-item" exact>
                Thêm mới gói thầu
              </router-link>
            </div>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              to="/upload-profile"
              active-class="active"
            >
              Tải lên hồ sơ thầu
            </router-link>
          </li>
        </ul>
        <div class="dropdown ml-4 mr-5">
          <button
            class="btn dropdown-toggle text-white"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Xin chào {{ userInfo.TEN_CA_NHAN }}
          </button>
          <div
            class="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton"
          >
            <router-link class="dropdown-item" to="/user/profile">
              Thông tin cá nhân
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/login" class="dropdown-item" exact>
              <button class="btn" @click="logout()">Đăng xuất</button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <!---------------------------------- END NAV ---------------------------------->
  </div>
</template>

<script>
export default {
  props: {
    /**
     * Current page title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Breacrumb link
     * Example: [
     *      {title: "Parent Link 1", href: "#"},
     *      {title: "Parent Link 2", href: "#"}
     * ]
     */
    link: {
      type: Array,
      default() {
        return [];
      },
    },
    /**
     * Size of container
     * lg(default): full width of screen
     * sm: normal container (1140px)
     */
    size: {
      type: String,
      default: "lg",
    },
    /**
     * Hide Header
     */
    hideHeader: {
      type: Boolean,
      default: false,
    },
    /**
     * Hide tab Control
     */
    hideTabControl: {
      type: Boolean,
      default: true,
    },
    /**
     * Hide Footer
     */
    hideFooter: {
      type: Boolean,
      default: false,
    },
    /**
     * Is Show Sidebar
     */
    showSidebar: {
      type: Boolean,
      default: false,
    },
    /**
     * Sidebar width (css width or 'auto')
     */
    sidebarWidth: {
      type: String,
      default: "auto",
    },
  },
  name: "page-container",
  created() {
    const userInfoData = localStorage.getItem("userInfo");
    this.userInfo = JSON.parse(userInfoData);
  },
  data() {
    return {
      items: [1],
      collapseSidebar: false,
      per: {
        all: 1,
      },
      userInfo: null,
    };
  },
  methods: {
    login() {
      this.$router.push("login");
    },
    profile() {
      this.$router.push("profile");
    },
    logout() {
      localStorage.removeItem("userInfo");
    },
  },
  computed: {
    sidebarMinWidth() {
      if (this.showSidebar === false) return 0;

      if (this.sidebarWidth === "auto") {
        return "260px";
      } else {
        return this.sidebarWidth;
      }
    },
    mainWidth() {
      if (this.showSidebar === false) return "100%";

      return `calc(100% - ${this.sidebarMinWidth})`;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.active {
  color: #fff;
}

@media (min-width: 992px) {
  .dropdown-menu .dropdown-toggle:after {
    border-top: 0.3em solid transparent;
    border-right: 0;
    border-bottom: 0.3em solid transparent;
    border-left: 0.3em solid;
  }
  .dropdown-menu .dropdown-menu {
    margin-left: 0;
    margin-right: 0;
  }
  .dropdown-menu li {
    position: relative;
  }
  .nav-item .submenu {
    display: none;
    position: absolute;
    left: 100%;
    top: -7px;
  }
  .nav-item .submenu-left {
    right: 100%;
    left: auto;
  }
  .dropdown-menu > li:hover {
    background-color: #f1f1f1;
  }
  .dropdown-menu > li:hover > .submenu {
    display: block;
  }
}
li {
  list-style: none;
  cursor: pointer;
}
.nav-header {
  padding-top: 4px;
  padding-bottom: 0px;
  background-color: white;
}

.nav-footer {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: white;
}

.breadcrumb {
  margin: 0;
  background: none;
  padding: 2px 0;
}

.main {
  width: 100%;
  height: calc(100vh - 47px);
  overflow-y: auto;
  margin-top: 56px;
}
</style>