<template>
  <div class="w-full h-full mx-auto pt-[70px] px-[200px] mb-10">
    <h1 class="text-center text-black font-extrabold text-4xl">Dokter Kami</h1>
    <section>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="text-base label-text text-black/70">Cari Dokter</span>
        </label>
        <form>
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >Search</label
          >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-[500px] p-4 pl-10 text-sm text-black border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ketik disini...."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-[-170px] bottom-2 bg-coral hover:bg-navy focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </section>
    <section class="mt-10">
      <DokterCard />
      <DokterCard />
      <DokterCard />
      <DokterCard />
    </section>
  </div>
</template>
