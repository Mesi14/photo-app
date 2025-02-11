import createEle from './Helpers/createEle.js';
import Title from './Components/title.mjs';
import ThumbGrid from './Components/thumbGrid.mjs';
import HandleData from './Components/handleData.mjs';
import Photo from './Components/photo.mjs';
import Router from './Components/router.mjs';

class App {
  constructor() {
    this.data = null;
    Router.instance.subscribe(this.onRouteChanged.bind(this));
  }

  cleanApp() {
    const app = document.querySelector(".main-container");
    if (app) {
      document.querySelector("body").removeChild(app);
    }
  }

  onRouteChanged(state) {
    this.render(state);
  }

  componentToRender(state) {
    if(state === null || state.link === "/") {
      return new ThumbGrid(this.data).render();
    }
    
    if(state.link.includes("/photo?id")) {
      const photoData = this.data.find(
        d => d.id === Number(state.link.split("=")[1])
      );
      
      if(photoData) {
        return new Photo(photoData).render();
      }
    }
    return `<h1 class="text-center">Page not found</h1>`
  }

  async render(state = null) {
    if(this.data == null) {
      this.data = await HandleData.instance.getData();
    }
    this.cleanApp();

    const mainContainer = createEle("main", "main-container");
    const convertToHTML = document.createDocumentFragment();
    const title = new Title().render();
    mainContainer.innerHTML = `
      ${title}
      ${this.componentToRender(state)}
    `;
    convertToHTML.appendChild(mainContainer);
    document.querySelector("body").appendChild(convertToHTML.firstElementChild)
  }
}

const photoApp = new App();
photoApp.render();
