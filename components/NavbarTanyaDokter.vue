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
      <section
        class="w-full bg-peach h-[40px] text-navy flex flex-row text-lg px-[200px] py-[7px] gap-10"
      >
        <p class="font-thin">Vaksinasi</p>
        <p class="font-thin">Infeksi</p>
        <p class="font-thin">Kutu</p>
        <p class="font-thin">Flu</p>
        <p class="font-thin">Grooming</p>
      </section>
      <TanyaDokterMain />
    </section>
  </div>
</template>
<script>
export default {};
</script>
