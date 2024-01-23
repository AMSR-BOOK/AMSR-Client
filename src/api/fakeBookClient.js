import axios from 'axios';

export default class FakeBookClient {
  async search() {
    return axios.get('/data/searchResult.json');
  }

  async mybooks() {
    return axios.get('/data/myBookResult.json');
  }
}
