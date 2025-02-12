export default class Photo {
  constructor(props) {
    this.props = props;
  }

  render() {
    return `
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-xs-8">
              <figure class="figure">
                <img src="${this.props.srcImage}" class="figure-img" width="100%">
              </figure>
          </div>
          <div class="col-lg-3 offset-lg-1 col-md-3 offset-md-1 col-xs-3 offset-xs-1 text-white more-info">
            <p class="description">${this.props.desc}</p>  
            <button data-link="/" class="btn btn-warning link-button" role="button">Go Back</button>
          </div>
        </div>
      </div>
    `
  }
}