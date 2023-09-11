<template>
  <div class="w-full h-full mx-auto pt-[70px] px-[200px] mb-10">
    <dialog id="my_modal_1" class="modal">
      <form
        method="dialog"
        class="max-w-full w-[700px] bg-white text-black modal-box"
      >
        <h3 class="font-bold text-xl">Grooming</h3>
        <ul class="list-disc pl-5 mt-5">
          <li class="flex justify-between">
            Grooming Kucing – Sehat <span>Rp65,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Kucing – Terapi Jamur <span>Rp80,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Kucing – Terapi Jamur <span>Rp80,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Kucing – Terapi Kombinasi <span>Rp85,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Kucing – Terapi Kutu <span>Rp90,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing – Kering <span>Rp75,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing(>5kg) – Sehat <span>Rp80,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing (>5kg) – Terapi Jamur
            <span>Rp115,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing (>5kg) – Terapi Kombinasi
            <span>Rp115,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing (>5kg) – Terapi Kutu
            <span>Rp115,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing (+5kg) – Sehat <span>Rp140,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing (-5kg) – Terapi Jamur
            <span>Rp155,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing (-5kg) – Terapi Kombinasi
            <span>Rp160,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing (-5kg) – Terapi Kutu
            <span>Rp150,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing 5-10kg – Sehat <span>Rp120,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing 5-10kg – Terapi Jamur <span>Rp135,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing 5-10kg – Terapi Kombinasi <span>Rp135,000.00</span>
          </li>
          <li class="flex justify-between">
            Grooming Anjing 5-10kg – Terapi Kutu <span>Rp135,000.00</span>
          </li>
        </ul>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="my_modal_2" class="modal">
      <form
        method="dialog"
        class="max-w-full w-[700px] bg-white text-black modal-box"
      >
        <h3 class="font-bold text-xl">Pemeriksaan Kesehatan</h3>
        <ul class="list-disc pl-5 mt-5">
          <li class="flex justify-between">
            Konsultasi <span>Rp85,000.00</span>
          </li>
          <li class="flex justify-between">
            Konsultasi Online <span>Rp20,000.00</span>
          </li>
          <li class="flex justify-between">
            Konsultasi lanjutan <span>Rp40,000.00</span>
          </li>
          <li class="flex justify-between">
            Injeksi antibiotik <span>Rp25,000.00</span>
          </li>
          <li class="flex justify-between">
            Injeksi non-antibiotik <span>Rp25,000.00</span>
          </li>
          <li class="flex justify-between">
            Injeksi multivitamin <span>Rp25,000.00</span>
          </li>
          <li class="flex justify-between">
            Obat racikan <span>Rp50,000.00</span>
          </li>
          <li class="flex justify-between">
            Sirup racikan
            <span>Rp50,000.00</span>
          </li>
          <li class="flex justify-between">
            Salep racikan
            <span>Rp50,000.00</span>
          </li>
        </ul>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="my_modal_3" class="modal">
      <form
        method="dialog"
        class="max-w-full w-[700px] bg-white text-black modal-box"
      >
        <h3 class="font-bold text-xl">Vaksinasi</h3>
        <ul class="list-disc pl-5 mt-5">
          <li class="flex justify-between">
            Vaksinasi 5L <span>Rp300,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi 5L+Rabies <span>Rp360,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi Felocell 3 <span>Rp255,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi Felocell 3+Rabies <span>Rp360,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi Felocell 4 <span>Rp310,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi Felocell 4+Rabies <span>Rp390,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi Nobivac + Rabies
            <span>Rp360,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi Nobivac Tricat
            <span>Rp270,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi Rabies
            <span>Rp115,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi RCP
            <span>Rp250,000.00</span>
          </li>
          <li class="flex justify-between">
            Vaksinasi RCP+Rabies
            <span>Rp365,000.00</span>
          </li>
        </ul>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="my_modal_4" class="modal">
      <form
        method="dialog"
        class="max-w-full w-[700px] bg-white text-black modal-box"
      >
        <h3 class="font-bold text-xl">Sterilisasi</h3>
        <ul class="list-disc pl-5 mt-5">
          <li class="flex justify-between">
            Steril kucing jantan <span>Rp380,000.00</span>
          </li>
          <li class="flex justify-between">
            Steril kucing betina <span>Rp750,000.00</span>
          </li>
          <li class="flex justify-between">
            Steril anjing jantan 5–10kg <span>Rp700,000.00</span>
          </li>
          <li class="flex justify-between">
            Steril anjing jantan >10kg <span>Rp1,000,000.00</span>
          </li>
          <li class="flex justify-between">
            Steril anjing jantan -5kg <span>Rp500,000.00</span>
          </li>
          <li class="flex justify-between">
            Steril anjing betina 5-10 kg <span>Rp1,000,000.00</span>
          </li>
          <li class="flex justify-between">
            Steril anjing betina > 10 kg
            <span>Rp1,500,000.00</span>
          </li>
          <li class="flex justify-between">
            Steril anjing betina -5 kg
            <span>Rp800,000.00</span>
          </li>
        </ul>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="my_modal_5" class="modal">
      <form
        method="dialog"
        class="max-w-full w-[700px] bg-white text-black modal-box"
      >
        <h3 class="font-bold text-xl">Rawat Inap</h3>
        <ul class="list-disc pl-5 mt-5">
          <li class="flex justify-between">
            Rawat Inap Anjing >10Kg <span>Rp200,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat Inap Anjing 5-10kg <span>Rp185,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat Inap Anjing -5kg <span>Rp160,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap FLUTD <span>Rp160,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap kasus pseudo mycota <span>Rp160,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat Inap Kucing <span>Rp150,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat Inap Kucing Infeksi Pencernaan
            <span>Rp190,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap parasit darah
            <span>Rp160,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap pos ovariohisterektomi (OH)
            <span>Rp160,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap post op caesar
            <span>Rp140,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap post op kastrasi
            <span>Rp140,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap post op otematom
            <span>Rp140,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap vulnus
            <span>Rp145,000.00</span>
          </li>
        </ul>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <dialog id="my_modal_6" class="modal">
      <form
        method="dialog"
        class="max-w-full w-[700px] bg-white text-black modal-box"
      >
        <h3 class="font-bold text-xl">Operasi</h3>
        <ul class="list-disc pl-5 mt-5">
          <li class="flex justify-between">
            Operasi caesar anjing <span>Rp2,000,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi caesar kucing <span>Rp1,000,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi enukleasi mata anjing -5kg <span>Rp400,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi enukleasi mata anjing >10 kg <span>Rp700,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi enukleasi mata anjing 5,1-10Kg <span>Rp700,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi enukleasi mata kucing <span>Rp600,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi Jahit Luka
            <span>Rp300,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi minor
            <span>Rp200,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi otematom anjing -5kg
            <span>Rp300,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi otematom anjing > 10kg
            <span>Rp700,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi otematom anjing 5,1-10Kg
            <span>Rp500,000.00</span>
          </li>
          <li class="flex justify-between">
            Operasi otematom kucing
            <span>Rp140,000.00</span>
          </li>
          <li class="flex justify-between">
            Rawat inap vulnus
            <span>Rp200,000.00</span>
          </li>
        </ul>
      </form>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    <h1 class="text-center text-black font-extrabold text-4xl">Layanan Kami</h1>
    <section class="mt-10 grid grid-cols-3 gap-4 justify-between">
      <div
        class="card w-[300px] bg-white shadow-xl mt-10"
        v-for="(layanans, index) in layanan"
        :key="index"
      >
        <figure class="px-10 pt-10">
          <img
            :src="`/img/${layanans.image}`"
            alt="Shoes"
            class="rounded-xl w-[300px] h-[150px] object-cover"
          />
        </figure>
        <div class="card-body items-center text-center text-navy">
          <h2 class="card-title text-3xl">{{ layanans.name }}</h2>
          <p>{{ layanans.harga }}</p>
          <div class="card-actions">
            <button
              class="btn bg-coral border-0 btn-primary mt-5"
              :onclick="`my_modal_${index + 1}.showModal()`"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-10"></section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      layanan: [
        {
          name: "Grooming",
          harga: "Rp60.000 - Rp160.000",
          image: "Grooming.jpeg",
        },
        {
          name: "Pemeriksaan Kesehatan",
          harga: "Rp20.000 - Rp85.000",
          image: "pemeriksaan-kesehatan.jpeg",
        },
        {
          name: "Vaksinasi",
          harga: "Rp115.000 - Rp390.000",
          image: "Vaksin.jpeg",
        },
        {
          name: "Sterilisasi",
          harga: "Rp380.000 - Rp1.500.000",
          image: "steril.jpeg",
        },
        {
          name: "Rawat Inap",
          harga: "Rp140.000 - Rp200.000",
          image: "rawat-inap.jpeg",
        },
        {
          name: "Operasi",
          harga: "Rp200.000 - Rp2.000.000",
          image: "operasi.jpeg",
        },
      ],
    };
  },
};
</script>
