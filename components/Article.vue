<template>
  <div class="w-full h-full bg-white mx-auto pt-[50px] px-[200px] pb-20">
    <section class="mt-10 grid grid-cols-3 gap-4 justify-between">
      <div
        class="card w-[300px] bg-peach shadow-xl mt-10"
        v-for="(layanans, index) in layanan"
        :key="index"
      >
        <div
          class="card-body items-center text-center text-navy justify-between"
        >
          <h2 class="card-title text-xl">{{ layanans.name }}</h2>
          <section class="flex flex-col mx-auto">
            <figure class="pt-10">
              <img
                :src="`/img/${layanans.image}`"
                alt="Shoes"
                class="rounded-xl w-[300px] h-[150px] object-cover"
              />
            </figure>
            <div class="card-actions mx-auto">
              <NuxtLink
                class="btn bg-coral border-0 btn-primary mt-5"
                :to="`/artikel/${layanans.slug}`"
              >
                Read More
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layanan: [
        {
          name: "Penting! Hal yang perlu diperhatikan dari pakan kucing",
          slug: "penting-hal-yang-perlu-diperhatikan",
          image: "artikel-satu.jpeg",
        },
        {
          name: "Kenapasih Kita Harus Vaksin Hewan Peliharaan Kita? Memang Penting?",
          slug: "kenapasih-kita-harus-vaksin-hewan",
          image: "artikel-dua.jpeg",
        },
        {
          name: "Kutu pada Hewan Peliharaan? Apa Penyebabnya?",
          slug: "kutu-pada-hewan-peliharaan-apa",
          image: "artikel-tiga.jpeg",
        },
        {
          name: "Mengapa kucing mempunyai kumis?",
          slug: "mengapa-kucing-mempunyai-kumis",
          image: "artikel-empat.jpeg",
        },
        {
          name: "Bagaimana cara yang baik dan kapan waktu yang tepat untuk memandikan kucing?",
          slug: "bagaimana-cara-yang-baik-dan-kapan-waktu",
          image: "artikel-lima.jpeg",
        },
        {
          name: "Bahaya Kutu pada Hewan Peliharaan Anda!",
          slug: "bahaya-kutu-pada-hewan",
          image: "artikel-enam.jpeg",
        },
      ],
    };
  },
};
</script>
