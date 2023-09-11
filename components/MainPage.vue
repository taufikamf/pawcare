<template>
  <section id="main" class="main">
    <section
      class="mx-auto flex mt-[50px] lex-col-reverse items-center justify-end"
    >
      <div class="carousel h-[450px] w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            class="w-full"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide4" class="btn btn-circle">❮</a>
            <a href="#slide2" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            class="w-full"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide1" class="btn btn-circle">❮</a>
            <a href="#slide3" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            class="w-full"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide2" class="btn btn-circle">❮</a>
            <a href="#slide4" class="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            class="w-full"
          />
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a href="#slide3" class="btn btn-circle">❮</a>
            <a href="#slide1" class="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped>
.main {
  /* background: linear-gradient(180deg, rgba(0, 0, 0, 0) 34.31%, #1a202c 100%),
    #703893; */

  @apply h-[530px] xl:h-[72vh] w-screen lg:h-[680px] mt-[-50px];
}
.main .button {
  @apply flex h-12 w-[40vw] items-center justify-center gap-1 rounded-lg text-[14px] font-[600] xl:font-semibold transition duration-300 hover:opacity-70 xl:h-12 xl:w-[180px] xl:gap-2 xl:text-base;
}

.learn {
  @apply w-[40vw] xl:w-auto;
}
</style>
