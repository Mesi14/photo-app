export default class HandleData {
  constructor() {
    this.data = [];
  }

  async getData() {
    const response = await fetch('../data.json');
    this.data = response.json();
  }
   
  
}