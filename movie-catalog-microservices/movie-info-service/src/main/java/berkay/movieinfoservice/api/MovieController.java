package berkay.movieinfoservice.api;

import berkay.movieinfoservice.model.Movie;
import info.movito.themoviedbapi.TmdbApi;
import info.movito.themoviedbapi.TmdbMovies;
import info.movito.themoviedbapi.model.MovieDb;
import info.movito.themoviedbapi.model.core.MovieResultsPage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin
@RequestMapping("/movies")
public class MovieController {

    @Value("${api.key}")
    private String apiKey;

    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/{movieId}")
    public Movie getMovieInfo(@PathVariable("movieId") String movieId) {

        TmdbApi tmdbApi = new TmdbApi(apiKey);
        TmdbMovies movies = tmdbApi.getMovies();
        MovieDb movie = movies.getMovie(Integer.parseInt(movieId), "en");

        return new Movie(movieId, movie.getTitle(), movie.getOverview(), movie.getVoteAverage()
                , "https://image.tmdb.org/t/p/original/" + movie.getPosterPath());
    }

    @GetMapping("/popularMovies/{page}")
    public MovieResultsPage popularMoviesByPage(@PathVariable("page") Integer page) {
        TmdbApi tmdbApi = new TmdbApi(apiKey);
        return tmdbApi.getMovies().getPopularMovies("en", page);
    }

    @RequestMapping("/topRatedMovies/{page}")
    public MovieResultsPage topRatedMoviesByPage(@PathVariable("page") Integer page) {
        TmdbApi tmdbApi = new TmdbApi(apiKey);
        return tmdbApi.getMovies().getTopRatedMovies("en", page);
    }

}
