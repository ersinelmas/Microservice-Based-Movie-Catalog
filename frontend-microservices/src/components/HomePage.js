const HomePage = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" style={{ height: '720px' }}>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/hbz-classic-movies-00-index-new-1591823486.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item " style={{ height: '720px' }}>
          <img
            src="https://entrepreneurship.babson.edu/wp-content/uploads/2020/10/Movie-1200-630.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item" style={{ height: '720px' }}>
          <img
            src="https://cdn.discordapp.com/attachments/1114869476316414014/1119646376398163989/composition-cinema-elements-red-background-with-copy-space.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomePage;
