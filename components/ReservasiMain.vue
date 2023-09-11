<template>
  <div class="bg-peach">
    <section class="flex flex-col justify-center text-center py-20">
      <h1 class="text-4xl text-black">Reservasi Sekarang</h1>
      <section
        class="mx-auto rounded-[20px] bg-white p-[15px] text-left xl:mt-10 xl:py-[30px] xl:px-[40px] w-2/3 mb-10"
      >
        <form enctype="multipart/form-data">
          <div class="input-group">
            <label for="email" class="label" id="email">Email</label>
            <input
              id="email"
              class="input"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div class="input-group">
            <label for="name" class="label" id="name">Name</label>
            <input
              class="input"
              type="text"
              name="name"
              id="name"
              maxlength="100"
              placeholder="Enter your full name"
            />
          </div>
          <div class="">
            <label for="dropdown" class="label" id="product">Hewan</label>
            <select
              class="dropdown xl:bg-whitePastel cursor-pointer rounded-lg border border-[#506281] bg-whitePastel p-[10px] text-left text-sm text-navy xl:mb-[20px] xl:w-[50%] xl:py-[10px] xl:pl-[10px] xl:text-[14px] xl:font-[400]"
              name=""
              id=""
              required
            >
              <option disabled selected>Pilih hewan</option>
              <option value="Kucing">Kucing</option>
              <option value="Anjing">Anjing</option>
            </select>
          </div>
          <div class="input-group">
            <label for="message" class="label" id="message">Keterangan</label>
            <textarea
              class="input textarea"
              name=""
              id="message"
              placeholder="Write your message here...."
              maxlength="2000"
            ></textarea>
          </div>
          <div class="input-group">
            <label for="message" class="label" id="message">Tanggal</label>
            <input
              type="datetime-local"
              name=""
              id=""
              class="input border border-black text-black"
            />
            <h1 class="flex flex-col text-left bg-white rounded-md">
              Aowkaokwo
            </h1>
          </div>
          <input
            class="submit"
            type="submit"
            id="submit"
            value="Submit"
            v-show="!isLoading"
          />
          <div role="status" class="flex justify-center" v-show="isLoading">
            <svg
              class="mr-2 inline h-8 w-8 animate-spin fill-coral text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </form>
      </section>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
};
</script>
<style scoped>
#email,
#name,
#message {
  color: black;
}
.dropdown {
  background-image: url("/icon/chevron-contact-us-down.svg");
  background-repeat: no-repeat;
  background-position-x: 97%;
  background-position-y: 50%;
}

.label {
  @apply font-[600] text-navy xl:mb-[8px] xl:text-[14px];
}

.label-active {
  @apply text-[#FBFDFF] !important;
}

input:focus:invalid {
  border-color: red !important;
}
.not-validate {
  border-color: red !important;
}

.validate {
  border-color: #506281;
}
.input {
  @apply w-full rounded-lg border text-black border-[#506281] bg-whitePastel p-[10px] text-sm font-[400] placeholder-navy xl:text-[14px];
}

.input-active {
  border-color: #fbfdff !important;
  color: #fbfdff !important;
}
.input-others {
  @apply w-full rounded-lg border border-[#506281] bg-[#27303F] py-[5px] px-[10px] text-[10px] font-[400] text-[#7186A7] placeholder-[#7186A7] xl:mb-[20px] xl:w-[50%] xl:py-[7px] xl:text-sm xl:font-[400];
}

.input:not(:placeholder-shown) {
  @apply border border-[#FBFDFF] text-white;
}

.topic {
  @apply mr-[5px] mb-[10px] cursor-pointer rounded-[20px] border border-[#506281] bg-[#27303F] py-[5px] px-[15px] text-[10px] font-medium text-[#506281] xl:text-[12px] xl:font-[500];
}

.topic-active {
  border-color: #ffffff;
  color: #fbfdff;
  background-color: #323d4d;
}

.submit {
  @apply w-full cursor-pointer rounded-lg bg-gradient-to-r from-coral to-coral/70 py-[7px] text-center text-xs font-semibold text-white xl:py-[12px] xl:text-[16px];
}

.submit:disabled {
  opacity: 0.4;
  cursor: default;
}

.input-selected {
  @apply text-white;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

select {
  appearance: none;
}

textarea {
  resize: none;
  overflow: auto;
  min-height: 50px;
  max-height: 300px;
}

input[type="datetime-local"] {
  background-color: #32415e;
  padding: 15px;
  color: #323d4d;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 5px;
}
::-webkit-calendar-picker-indicator {
  background-color: #323d4d;
  padding: 5px;
  cursor: pointer;
  border-radius: 3px;
}
</style>
