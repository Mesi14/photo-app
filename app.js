import createEle from './Helpers/createEle.js';
import Title from './Components/title.mjs';
import ThumbGrid from './Components/thumbGrid.mjs';
import HandleData from './Components/handleData.mjs';

class App {
  constructor() {
    this.data = [];
  }

  async render(container) {
    this.data = await HandleData.getData();
    const mainContainer = createEle("main", "main-container");
    const convertToHTML = document.createDocumentFragment();
    const title = new Title().render();
    const thumbnails = new ThumbGrid(this.data).render();
    mainContainer.innerHTML = `
      ${title}
      ${thumbnails}
    `;

    convertToHTML.appendChild(mainContainer);
    container.appendChild(convertToHTML);
  }
}

const photoApp = new App();
photoApp.render(document.querySelector("body"));
