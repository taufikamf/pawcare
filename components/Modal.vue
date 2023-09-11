<template>
  <div
    class="fixed top-0 z-40 flex h-screen w-screen items-center justify-center"
  >
    <section
      class="absolute h-screen w-screen bg-black bg-opacity-50"
      @click="() => $store.commit('setModalLogin', false)"
    />

    <div class="modal-box bg-whitePastel relative">
      <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <h3 class="text-2xl font-bold text-center text-navy">
        Masuk atau Daftar
      </h3>
      <p class="py-4 text-navy text-center mb-[20px]">
        Halo, Sobat Paw! Ayo masuk dan jelajahi informasi kesehatan peliharaanmu
        bersama Paw Care.
      </p>
      <form action="" class="flex flex-col justify-center">
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
          <span @click="openRegist" class="underline text-coral cursor-pointer">
            Daftar
          </span></small
        >
        <input
          type="submit"
          value="Submit"
          class="btn mt-[30px] bg-navy text-whitePastel mx-auto w-[30%]"
        />
      </form>
    </div>
  </div>
</template>
<script setup>
const login = useLogin;
</script>
<script></script>
<style scoped>
.container {
  width: 350px;
  @apply relative rounded-[20px] bg-navy p-[20px] md:p-[30px];
}

@media (min-width: 768px) {
  .container {
    width: 350px;
  }
}
</style>
