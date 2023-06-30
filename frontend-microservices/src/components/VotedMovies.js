import axios from 'axios';
import { useEffect, useState } from 'react';

const VotedMovies = () => {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    movies();
  }, []);

  const movies = async () => {
    const response = await axios.get(`http://localhost:8081/catalog/1`);

    setResponse(response.data);
    console.log(response);
  };

  return (
    <div>
      <div className="popular-movies-container">
        <div className="populer-movies-cards">
          {response.map((item, index) => (
            <div class="card" style={{ width: '18rem' }}>
              <img
                src={item.posterPath}
                class="card-img-top"
                style={{ minHeight: '429px' }}
                alt="..."
              />
              <div id={index} class="card-body">
                <div className="my-card-context">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.description}</p>
                </div>
                <div style={{ marginLeft: '10px', marginRight: '10px' }}>
                  <div>
                    <span
                      className="badge bg-primary rounded-pill"
                      style={{ padding: '5px 10px' }}
                    >
                      Ortalama Oy: &nbsp;
                      {parseFloat(item.voteAverage.toFixed(1))} / 10
                    </span>
                  </div>
                  <div>
                    <span
                      className="badge bg-primary rounded-pill"
                      style={{ padding: '5px 10px' }}
                    >
                      Oyunuz: &nbsp;
                      {item.rating} / 10
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VotedMovies;
