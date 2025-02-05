export default class HandleData {
  constructor() {
    this.data = [];
  }

  static async getData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();

      return data
    } catch (error) {
      console.log('Error in handleData', error);
    }
  }
}