import './PopularMovies.css';

import axios from 'axios';
import { useState, useEffect } from 'react';

const PopulerMovies = () => {
  let storedMovieList = JSON.parse(sessionStorage.getItem('movieList')) || [];
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [voteList, setVoteList] = useState({});

  useEffect(() => {
    loadPopularMoviesInfo(page);
  }, [page]);

  const loadPopularMoviesInfo = async (pageNum) => {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await axios.get(
        `http://localhost:8082/movies/popularMovies/${pageNum}`
      );
      console.log(response);
      setResponse(response.data.results);
      setTotalPages(response.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.error('Error while fetching data:', error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  const handleButtonChange = (rating, id) => {
    console.log(rating, id);
    let votes = {
      movieID: id,
      vote: rating,
    };
    storedMovieList.push(votes);
    sessionStorage.setItem('movieList', JSON.stringify(storedMovieList));

    setVoteList((prevVotes) => {
      const newVotes = { ...prevVotes };
      newVotes[id] = rating;
      return newVotes;
    });
  };

  const handleInputChange = (event, id) => {
    const rating = event.target.value;

    setVoteList((prevVotes) => {
      const newVotes = { ...prevVotes };
      newVotes[id] = rating;
      return newVotes;
    });
  };

  const resetRange = (id) => {
    setVoteList((prevVotes) => {
      const newVotes = { ...prevVotes };
      newVotes[id] = 0;
      return newVotes;
    });
  };

  const Spinner = () => {
    return (
      <div className="spinner-cover-1">
        <div
          className="spinner-border"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <span className="spinner-text">Yükleniyor...</span>
      </div>
    );
  };

  const ErrorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ width: '60%', margin: 'auto' }}
        role="alert"
      >
        Bu bileşen yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
      </div>
    );
  };

  const handlePageChange = (pageNum) => {
    setPage(pageNum);
    window.scrollTo(0, 0);
  };

  const renderPageNumbers = () => {
    let startPage = Math.max(page - 5, 0);
    let endPage = Math.min(page + 5, totalPages - 1);
    const pageNumbers = Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );

    return pageNumbers.map((pageNum) => (
      <span
        key={pageNum}
        className={`page-number ${pageNum === page ? 'active' : ''}`}
        onClick={() => handlePageChange(pageNum)}
      >
        {pageNum + 1}
      </span>
    ));
  };

  return (
    <div className="popular-movies">
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <ErrorMessage />
      ) : (
        <>
          <div className="popular-movies-container">
            <div className="populer-movies-cards">
              {response.map((item, index) => (
                <div className="card" style={{ width: '18rem' }} key={item.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    className="card-img-top"
                    style={{ minHeight: '429px' }}
                    alt="..."
                  />
                  <div id={index} className="card-body">
                    <div className="my-card-context">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.overview}</p>
                    </div>
                    <div>
                      <label
                        htmlFor={'customRange' + index}
                        className="form-label"
                      >
                        Değerlendirmeniz:
                      </label>
                      <input
                        type="range"
                        className="form-range"
                        min="1"
                        max="10"
                        value={voteList[item.id] || 0}
                        onChange={(e) => handleInputChange(e, item.id)}
                        id={'customRange' + index}
                      />
                      <button
                        id="my-button"
                        className="btn btn-primary"
                        onClick={() => {
                          handleButtonChange(voteList[item.id], item.id);
                          resetRange(item.id);
                        }}
                      >
                        Değerlendir
                      </button>
                    </div>
                    <div
                      className="badge bg-primary rounded-pill"
                      style={{ padding: '10px 10px', marginTop: '10px' }}
                    >
                      Ortalama Oy: &nbsp;
                      {parseFloat(item.vote_average.toFixed(1))} / 10
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {response.length > 0 && (
            <div className="pagination">
              <button
                className="pagination-button-1"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 0}
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </button>
              <div className="page-numbers">
                {page > 5 && <span onClick={() => handlePageChange(0)}>1</span>}
                {page > 6 && <span className="ellipsis">...</span>}
                {renderPageNumbers()}
                {page < totalPages - 6 && <span className="ellipsis">...</span>}
                {page < totalPages - 6 && (
                  <span onClick={() => handlePageChange(totalPages - 1)}>
                    {totalPages}
                  </span>
                )}
              </div>
              <button
                className="pagination-button-2"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages - 1}
              >
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PopulerMovies;
