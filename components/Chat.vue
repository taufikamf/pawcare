<template>
  <div class="w-[70%]">
    <section class="flex flex-col">
      <section class="question flex flex-row">
        <div class="avatar mr-6">
          <div class="w-16 h-16 rounded-full">
            <img src="https://i.pravatar.cc/300" />
          </div>
        </div>
        <section class="bg-white w-full rounded-md px-4 py-3">
          <section class="flex flex-row justify-between">
            <h1 class="text-black text-xl font-bold">{{ penanya }}</h1>
            <small class="text-grayscale-80">{{ tanggal }}</small>
          </section>
          <p class="text-[#050505] text-md font-light mt-3">
            {{ pertanyaan }}
          </p>
        </section>
      </section>
      <!-- <section class="answer mt-5 flex flex-row">
        <div class="avatar pl-[80px] mr-6">
          <div class="w-10 h-10 rounded-full">
            <img src="https://i.pravatar.cc/300" />
          </div>
        </div>
        <section class="bg-white w-full rounded-md px-4 py-3">
          <section class="flex flex-row justify-between">
            <h1 class="text-black text-xl font-bold">Sinchan</h1>
            <small class="text-grayscale-80">26 Apr 2023</small>
          </section>
          <p class="text-[#050505] text-md font-light mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id
            enim, doloremque necessitatibus impedit.
          </p>
        </section>
      </section> -->
    </section>
    <hr class="border-[0.5px] border-black my-5" />
  </div>
</template>
<script>
export default {
  props: {
    pertanyaan: String,
    tanggal: String,
    penanya: String,
  },
};
</script>
