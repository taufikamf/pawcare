<template>
  <div>
    <section>
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="navbar h-[80px] flex-row bg-navy pr-[20px]">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl text-white">Pawcare</a>
        </div>
        <div class="flex-row justify-between w-[40%] pr-[30px]">
          <section class="flex gap-6 text-white">
            <NuxtLink to="/tanya-dokter">Beranda</NuxtLink>
            <NuxtLink to="/tanya-dokter">Tanya Dokter</NuxtLink>
            <NuxtLink to="/reservasi">Reservasi</NuxtLink>
            <NuxtLink to="/tanya-dokter">Layanan</NuxtLink>
          </section>
          <Icon
            name="material-symbols:account-circle"
            class="text-white text-4xl"
          />
        </div>
      </div>
      <MainPage />
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDaftar: false,
      isLogin: false,
    };
  },
  methods: {
    openSidebar() {
      this.$refs.drawerToggle.click();
    },
    openRegist() {
      if (this.isLogin == true) {
        this.isDaftar = !this.isDaftar;
        this.isLogin == false;
      } else {
        this.isDaftar = !this.isDaftar;
      }
    },
    openLogin() {
      this.isLogin = !this.isLogin;
    },
    closeModal() {
      this.isLogin = false;
      this.isDaftar = false;
    },
  },
};
</script>
