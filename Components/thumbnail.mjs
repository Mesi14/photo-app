import Router from "./router.mjs";

export default class Thumbnail {
  constructor(props) {
    this.props = props;

    document.addEventListener("click", e => {
      e.target && e.target.classList.contains("link-button") && this.onLinkClicked(e)
      }
    );
  }

  onLinkClicked(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    const { title, link } = e.target.dataset;
    Router.instance.pushHistory({ title, link });
  }

  render() {
    return `
      <div class="card card-img-top" style="width: 18rem; height: 100%;">
        <img src='${this.props.srcThumbnail}' alt="some descript" width="100%" height="220rem">
        <div class="card-body">
          <h5 class="card-title">${this.props.title}</h5>
          <p class="card-text">${this.props.shortDesc}</p>
          <button data-title="${this.props.title}" data-link="/photo?id=${this.props.id}" class="btn btn-primary link-button" role="button">See more</button>
        </div>
      </div>
    `
  }
}
