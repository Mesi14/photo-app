import Thumbnail from "./thumbnail.mjs"

export default class ThumbGrid {
  constructor(data) {
    this.data = data;
    this.thumbnails = [];
  }

  get thumbnailContainer() {
    let containerHTML = "";
    this.thumbnails.forEach( thumbnail => (containerHTML += `<div class="col-md-4 col-xs-6 mt-5">${thumbnail.render()}</div>`));
    return containerHTML;
  }

  componentWillRender() {
    if(this.thumbnails.length > 0) {
      return;
    }

    this.data.forEach(element => {
      this.thumbnails.push(new Thumbnail(element));
    });
  }

  render() {
    this.componentWillRender();

    return `
     <div class="container text-center mt-5">
      <div class="row">
        ${this.thumbnailContainer}
      <div>
    </div>
    `;
  }
}
