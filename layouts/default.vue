<template>
  <div class="bg-peach">
    <div>
      <div
        class="fixed top-0 z-40 flex h-screen w-screen items-center justify-center"
        v-show="isLogin"
      >
        <section
          class="absolute h-screen w-screen bg-black bg-opacity-50"
          @click="() => $store.commit('setModalLogin', false)"
        />

        <div class="toast toast-top toast-end" v-if="isLoggedIn">
          <div class="alert alert-success">
            <span>Login Berhasil</span>
          </div>
        </div>

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
              v-model="email"
              type="email"
              placeholder="Masukkan email"
              class="input bg-whitePastel border-2 border-navy text-navy w-full mb-[15px]"
            />
            <input
              v-model="password"
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
            <button
              @click="loginUser()"
              class="btn mt-[30px] bg-navy text-whitePastel mx-auto w-[30%]"
            >
              Masuk
            </button>
          </section>
        </div>
      </div>
      <div
        class="fixed top-0 z-40 flex h-screen w-screen items-center justify-center"
        v-show="isDaftar"
      >
        <div class="toast toast-top toast-end" v-if="isSuccess">
          <div class="alert alert-success">
            <span>Registrasi Berhasil</span>
          </div>
        </div>
        <section class="absolute h-screen w-screen bg-opacity-50" />

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
              v-model="name"
            />
            <input
              type="text"
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
              @click="registUser()"
            >
              <h1 v-if="!isLoading">Daftar</h1>
              <span
                v-if="isLoading"
                class="loading loading-spinner loading-lg"
              ></span>
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
          <div class="flex-row justify-between w-[43%] pr-[30px]">
            <section class="flex gap-4 text-white">
              <NuxtLink :class="{ 'text-peach': $route.path === '/' }" to="/"
                >Beranda</NuxtLink
              >
              <NuxtLink
                :class="{ 'text-peach': $route.path === '/tanya-dokter' }"
                to="/tanya-dokter"
                >Tanya Dokter</NuxtLink
              >
              <NuxtLink
                :class="{ 'text-peach': $route.path === '/reservasi' }"
                to="/reservasi"
                >Reservasi</NuxtLink
              >
              <NuxtLink
                :class="{ 'text-peach': $route.path === '/layanan' }"
                to="/layanan"
                >Layanan</NuxtLink
              >
              <NuxtLink
                :class="{ 'text-peach': $route.path === '/dokter' }"
                to="/dokter"
                >Dokter</NuxtLink
              >
            </section>
            <button
              @click="openLogin"
              class="btn bg-gray text-navy hover:bg-navy hover:text-gray border-0"
              v-if="counter.token == ''"
            >
              <h1>Masuk</h1>
            </button>

            <div
              class="dropdown dropdown-hover dropdown-left"
              v-if="counter.token != ''"
            >
              <Icon
                name="mdi:account-circle"
                class="text-white text-5xl mr-2"
                tabindex="0"
              />
              <ul
                tabindex="0"
                class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li><a @click="logout()">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
        <section
          class="w-full bg-white h-[40px] text-navy flex flex-row text-lg px-[200px] py-[7px] gap-10"
          v-if="$route.path === '/tanya-dokter'"
        >
          <p class="font-thin">Vaksinasi</p>
          <p class="font-thin">Infeksi</p>
          <p class="font-thin">Kutu</p>
          <p class="font-thin">Flu</p>
          <p class="font-thin">Grooming</p>
        </section>
        <slot />
      </section>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import { useCounter } from "~/stores/myStore";
const counter = useCounter();
console.log(counter.token);
</script>
<script>
import { useCounter } from "~/stores/myStore";
const counter = useCounter();
const token = counter.token;
export default {
  data() {
    return {
      isDaftar: false,
      isLogin: false,
      isSuccess: false,
      isAuth: false,
      isLoading: false,
      isLoggedIn: false,
      name: "",
      email: "",
      phone: "",
      password: "",
    };
  },
  methods: {
    async registUser() {
      this.isLoading = true;
      const response = await $fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        },
      });
      if (response.success == true) {
        this.isSuccess = true;
        counter.updateToken(response.token);
        counter.updateId(response.user_id);
        setTimeout(() => {
          this.isLogin = false;
          this.isDaftar = false;
          this.isAuth = true;
        }, 2000);
        setTimeout(() => {
          this.isSuccess = true;
        }, 4000);
      } else {
        this.isSuccess = false;
      }
      this.isLoading = false;
    },
    async loginUser() {
      this.isLoading = true;
      const response = await $fetch("http://localhost:8000/api/login", {
        method: "POST",
        body: {
          email: this.email,
          password: this.password,
        },
      });
      if (response.token) {
        this.isLoggedIn = true;
        counter.updateToken(response.token);
        counter.updateId(response.user_id);
        setTimeout(() => {
          this.isLogin = false;
          this.isDaftar = false;
          this.isAuth = true;
        }, 2000);
        setTimeout(() => {
          this.isLoggedIn = true;
        }, 4000);
      } else {
        this.isLoggedIn = false;
      }
      this.isLoading = false;
    },
    async logout() {
      counter.updateToken("");
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
