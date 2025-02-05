import Thumbnail from "./thumbnail.mjs"

export default class ThumbGrid {
  constructor(data) {
    this.data = data;
    this.thumbnails = [];
  }

  componentWillRender() {
    if(this.thumbnails.length > 0) {
      return;
    }

    this.data.array.forEach(element => {
      t
    });
  }

  render() {
    this.componentWillRender();

    return `
    <section class="container>
      <div class="row">
        <div class="col-md-4 col-xs-6">
          ${thumb}
        </div>
      </div>
    </section>
    `
  }
}
