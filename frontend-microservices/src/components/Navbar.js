const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="/homePage">
          MovieDB
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/homePage">
                Ana Sayfa
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/popularMovies">
                Popüler Filmler
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/topRatedMovies">
                En Çok Oy Alanlar
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/votedMovies">
                Oylanan Filmler
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
