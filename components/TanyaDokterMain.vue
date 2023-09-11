<template>
  <div>
    <div
      class="fixed top-0 z-40 flex h-screen w-screen items-center justify-center"
      v-show="showModal"
    >
      <div class="toast toast-top toast-end" v-if="isSuccess">
        <div class="alert alert-success">
          <span>Pertanyaan telah di Submit</span>
        </div>
      </div>
      <section class="absolute h-screen w-screen bg-black bg-opacity-30" />

      <div class="modal-box w-[800px] bg-whitePastel relative">
        <label
          for="my-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="toggleModal"
          >✕</label
        >
        <h3 class="text-2xl font-bold text-center text-navy">
          Buat Pertanyaan
        </h3>
        <hr class="border-[0.5px] border-black mt-2" />
        <section class="flex flex-row items-center justify-start mt-3 w-full">
          <div class="avatar mr-4">
            <div class="w-12 h-12 rounded-full">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </div>
          <h1 class="text-black text-xl font-bold">Putri Syakila</h1>
        </section>
        <textarea
          class="textarea w-full bg-none bg-opacity-0 text-base text-black p-0 mt-3 focus:bg-none border-0 focus:border-0 focus:outline-none"
          placeholder="Apa yang mau anda tanya Putri?"
          v-model="pertanyaan"
          rows="10"
        ></textarea>
        <select
          class="select select-ghost w-full max-w-xs my-7"
          v-model="kategori"
        >
          <option disabled selected>Pilih Kategori</option>
          <option>Vaksinasi</option>
          <option>Infeksi</option>
          <option>Kutu</option>
          <option>Flu</option>
          <option>Grooming</option>
        </select>
        <button
          class="btn bg-white hover:bg-navy text-navy hover:text-white w-full text-lg"
          :disabled="pertanyaan == '' && kategori == ''"
          @click="createQuestion()"
        >
          Kirim
        </button>
      </div>
    </div>
    <div class="pt-[70px] px-[200px]">
      <h1 class="text-3xl text-black font-semibold">Tanya Dokter</h1>
      <section class="flex flex-row gap-6 my-[25px]">
        <button
          class="border w-[300px] rounded-[4px] bg-white border-navy text-navy p-4 text-md"
          @click="toggleModal"
        >
          <Icon name="ic:baseline-mode-edit" class="text-navy text-2xl" />
          Buat Pertanyaan
        </button>
        <button class="w-[300px] rounded-[4px] bg-navy text-white p-4 text-md">
          Cari Pertanyaan Berdasarkan Topik
        </button>
      </section>
      <section>
        <h1 class="text-3xl text-black font-semibold mb-[50px]">
          Diskusi Kesehatan Terbaru
        </h1>
        <Chat
          :pertanyaan="'Bagaimana cara mendiagnosis infeksi pada kucing? Apakah tes laboratorium diperlukan?'"
          :penanya="'Putri Syakila'"
          :tanggal="'8 Juli 2023'"
        />
        <Chat
          :pertanyaan="'Apa saja vaksin yang direkomendasikan untuk anjing dan kapan waktu yang tepat untuk memberikannya?'"
          :penanya="'Jeno Lee'"
          :tanggal="'7 Juli 2023'"
        />
        <Chat
          :pertanyaan="'Apa saja Bagaimana cara membersihkan telinga, memotong kuku, dan menjaga kebersihan gigi hewan peliharaan? yang direkomendasikan untuk anjing dan kapan waktu yang tepat untuk memberikannya?'"
          :penanya="'Karina'"
          :tanggal="'8 Juli 2023'"
        />
      </section>
    </div>
  </div>
</template>
<script></script>
<script>
import { useCounter } from "~/stores/myStore";
export default {
  data() {
    const counter = useCounter();
    return {
      isSuccess: false,
      showModal: false,
      pertanyaan: "",
      kategori: "",
      user_id: counter.user_id,
    };
  },
  mounted() {
    const counter = useCounter();
    counter.getQuestion();
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    async createQuestion() {
      const counter = useCounter();
      this.isLoading = true;
      const response = await $fetch("http://localhost:8000/api/pertanyaan", {
        method: "POST",
        body: {
          id_user: counter.user_id,
          pertanyaan: this.pertanyaan,
          kategori: this.kategori,
        },
      });
      if (response.id_penanya) {
        setTimeout(() => {
          this.isSuccess = true;
        }, 2000);
        setTimeout(() => {
          this.showModal = false;
        }, 2000);
      } else {
        this.isSuccess = false;
      }
      this.showModal = false;
    },
  },
};
</script>
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
