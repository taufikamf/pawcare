<template>
  <div class="bg-white">
    <section class="bg-white">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="navbar h-[80px] flex-row bg-navy pr-[20px]">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl text-white">Pawcare</a>
        </div>
        <div class="flex-row justify-between w-[40%] pr-[30px]">
          <section class="flex gap-6 text-white">
            <a href="">Beranda</a>
            <a href="">Tanya Dokter</a>
            <a href="">Reservasi</a>
            <a href="">Layanan</a>
          </section>
          <Icon
            name="material-symbols:account-circle"
            class="text-white text-4xl"
          />
        </div>
      </div>
      <ReservasiMain />
    </section>
  </div>
</template>
<script>
export default {};
</script>
