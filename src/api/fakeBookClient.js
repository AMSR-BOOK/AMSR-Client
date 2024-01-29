import axios from 'axios';

export default class FakeBookClient {
  async search(keyword) {
    if (keyword === '쇼펜하우어') return axios.get('/data/searchResult.json');
    else return new Error();
  }

  async mybooks() {
    return axios.get('/data/myBookResult.json');
  }
}
