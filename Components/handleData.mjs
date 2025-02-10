export default class HandleData {
  static $instance = null;
  
  storeInStorage(data) {
    window.sessionStorage.setItem("data", JSON.stringify(data));
  }

  retrieveFromStorage() {
    const data = window.sessionStorage.getItem("data");
    if(data) {
      return JSON.parse(data);
    }
    return null;
  }

  async getData() {
    try {
      let data = this.retrieveFromStorage();
      if (data) {
        return data;
      }
      const response = await fetch('data.json');
      data = await response.json();
      this.storeInStorage(data);
      return data;
    } catch (error) {
      console.log('Error in handleData', error);
    }
  }

  static get instance() {
    if(HandleData.$instance === null) {
      HandleData.$instance = new HandleData();
    }
    return HandleData.$instance;
  }
}