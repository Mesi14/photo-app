import Thumbnail from "./thumbnail.mjs"

export default class ThumbGrid {
  constructor() {

  }

  render() {
    const thumb = new Thumbnail().render();
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
