export default class Book {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : new Error();
  }

  async myBooks() {
    return this.apiClient.mybooks().then((res) => res.data);
  }

  async getReadingBooks() {
    return this.apiClient
      .mybooks()
      .then((res) => res.data)
      .then((data) => data.filter((book) => book.status === 'READING'));
  }

  async #searchByKeyword(keyword) {
    return this.apiClient.search(keyword).then((res) => res.data);
  }

  async #mostPopular() {
    return this.apiClient.book().then((res) => res.data);
  }
}
