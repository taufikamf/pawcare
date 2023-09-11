<template>
  <section id="main" class="main">
    <section
      class="mx-auto flex mt-[50px] lex-col-reverse items-center justify-end"
    >
      <div class="carousel h-full w-full pt-[100px]">
        <div id="slide1" class="carousel-item relative w-full">
          <img src="/img/homepage.png" class="w-full" />
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped>
.main {
  @apply h-[530px] xl:h-[70vh] w-screen lg:h-[680px] mt-[-50px];
}
.main .button {
  @apply flex h-12 w-[40vw] items-center justify-center gap-1 rounded-lg text-[14px] font-[600] xl:font-semibold transition duration-300 hover:opacity-70 xl:h-12 xl:w-[180px] xl:gap-2 xl:text-base;
}

.learn {
  @apply w-[40vw] xl:w-auto;
}
</style>
<script>
export default {
  methods: {
    async registUser(data) {
      await $fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: data,
      });
    },
  },
};
</script>
