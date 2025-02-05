import createEle from './Helpers/createEle.js';
import Title from './Components/title.mjs';
import ThumbGrid from './Components/thumbGrid.mjs';

class App {
  constructor() {
  }

  render(container) {
    const mainContainer = createEle("main", "main-container");
    const convertToHTML = document.createDocumentFragment();
    const title = new Title().render();
    const thumbnails = new ThumbGrid().render();
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