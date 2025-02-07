export default class Thumbnail {
  constructor(props) {
    this.props = props;
  }

  render() {
    return `
      <div class="card card-img-top" style="width: 18rem; height: 100%; ">
        <img src='${this.props.srcThumbnail}' alt="some descript" width="100%">
        <div class="card-body">
          <h5 class="card-title">${this.props.title}</h5>
          <p class="card-text">${this.props.shortDesc}</p>
          <a href="${this.props.title}" class="btn btn-success" role="button">See more</a>
        </div>
      </div>
    `
  }
}
