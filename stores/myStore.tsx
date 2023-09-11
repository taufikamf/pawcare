const delay = (t: number) => new Promise((r) => setTimeout(r, t))

export const useCounter = defineStore('counter', {
  state: () => ({
    token: '',
    user_id: '',
    pertanyaan :['']
  }),
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    updateToken(string: string) {
      this.token = string
    },
    updateId(string: string) {
      this.user_id = string
    },
    async getQuestion(){
      const response: string[] = await $fetch("http://localhost:8000/api/pertanyaan", {
        method: "GET"
      });
      console.log(response)
      this.pertanyaan = response
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}
