export default class Book {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async myBooks() {
    return this.apiClient.mybooks().then((res) => res.data);
  }

  async #searchByKeyword(keyword) {
    return this.apiClient.search().then((res) => res.data);
  }

  async #mostPopular() {
    return this.apiClient.book().then((res) => res.data);
  }
}
