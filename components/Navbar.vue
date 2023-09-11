<template>
  <div>
    <div
      class="fixed top-0 z-40 flex h-screen w-screen items-center justify-center"
      v-show="isLogin"
    >
      <section
        class="absolute h-screen w-screen bg-black bg-opacity-50"
        @click="() => $store.commit('setModalLogin', false)"
      />

      <div class="modal-box bg-whitePastel relative">
        <label
          @click="closeModal"
          for="my-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          >✕</label
        >
        <h3 class="text-2xl font-bold text-center text-navy">
          Masuk atau Daftar
        </h3>
        <p class="py-4 text-navy text-center mb-[20px]">
          Halo, Sobat Paw! Ayo masuk dan jelajahi informasi kesehatan
          peliharaanmu bersama Paw Care.
        </p>
        <section class="flex flex-col justify-center">
          <input
            type="email"
            placeholder="Masukkan email"
            class="input bg-whitePastel border-2 border-navy text-navy w-full mb-[15px]"
          />
          <input
            type="password"
            placeholder="Masukkan password"
            class="input bg-whitePastel border-2 border-navy text-navy w-full"
          />
          <small class="text-navy text-center mt-[20px]"
            >Belum punya akun?
            <span
              @click="openRegist"
              class="underline text-coral cursor-pointer"
            >
              Daftar
            </span></small
          >
          <NuxtLink
            to="/main"
            class="btn mt-[30px] bg-navy text-whitePastel mx-auto w-[30%]"
          >
            Masuk
          </NuxtLink>
        </section>
      </div>
    </div>
    <div
      class="fixed top-0 z-40 flex h-screen w-screen items-center justify-center"
      v-show="isDaftar"
    >
      <section class="absolute h-screen w-screen bg-black bg-opacity-50" />

      <div class="modal-box bg-whitePastel relative">
        <label
          for="my-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="closeModal"
          >✕</label
        >
        <h3 class="text-2xl font-bold text-center text-navy">Daftar</h3>
        <p class="py-4 text-navy text-center mb-[20px]">
          Halo, Sobat Paw! Ayo daftar dan jelajahi informasi kesehatan
          peliharaanmu bersama Paw Care.
        </p>
        <div class="flex flex-col justify-center">
          <input
            type="text"
            placeholder="Masukkan nama"
            class="input bg-whitePastel border-2 border-navy text-navy w-full mb-[15px]"
            v-model="nama"
          />
          <input
            type="number"
            placeholder="Masukkan nomor telepon"
            class="input bg-whitePastel border-2 border-navy text-navy w-full mb-[15px]"
            min="11"
            v-model="phone"
          />
          <input
            type="email"
            placeholder="Masukkan email"
            class="input bg-whitePastel border-2 border-navy text-navy w-full mb-[15px]"
            v-model="email"
          />
          <input
            type="password"
            placeholder="Masukkan password"
            class="input bg-whitePastel border-2 border-navy text-navy w-full"
            v-model="password"
          />
          <button
            class="btn mt-[30px] bg-navy text-whitePastel mx-auto w-[30%]"
            @click="userRegist()"
          >
            Daftar
          </button>
        </div>
      </div>
    </div>
    <section>
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="navbar h-[80px] flex-row bg-navy pr-[20px]">
        <div class="flex-1">
          <NuxtLink to="/">
            <img src="/img/long-logo.png" class="w-[200px]" alt="" />
          </NuxtLink>
        </div>
        <div class="flex-row justify-between w-[40%] pr-[30px]">
          <section class="flex gap-6 text-white">
            <a href="">Beranda</a>
            <a href="">Tanya Dokter</a>
            <a href="">Reservasi</a>
            <a href="">Layanan</a>
          </section>
          <button
            @click="openLogin"
            class="btn bg-gray text-navy hover:bg-navy hover:text-gray border-0"
          >
            Masuk
          </button>
        </div>
      </div>
      <Welcome />
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
    async registUser() {
      const response = await $fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: {
          email: this.email,
          name: this.name,
          phone: this.phone,
          password: this.password,
        },
      });
      console.log(response);
    },
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
