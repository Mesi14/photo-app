export default class Title {
  constructor() {
    this.title = "Mesi's Photo Gallery"
    this.subtitle = "This is my photo gallery"
  }

  render() {
    return `
      <header class="container-fluid text-white text-sm-center p-5 bg-dark">
        <h1 class="display-2">${this.title}</h1>
        <h2 class="lead">${this.subtitle}</h2>
      </header>
    `;
  }
 }