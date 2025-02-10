import Router from "./router.mjs";

export default class Title {
  constructor() {
    this.title = "Mesi's Photo Gallery";
    this.subtitle = "This is my photo gallery";
    document.addEventListener("click", e => {
        e.target && e.target.classList.contains("title-link") && this.onTitleLinkClicked(e)
      }
    );
  }

  onTitleLinkClicked(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    Router.instance.pushHistory({ title: this.heading, link: "/" });
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