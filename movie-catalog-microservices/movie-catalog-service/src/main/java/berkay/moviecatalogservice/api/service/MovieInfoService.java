package berkay.moviecatalogservice.api.service;

import berkay.moviecatalogservice.model.CatalogItem;
import berkay.moviecatalogservice.model.Movie;
import berkay.moviecatalogservice.model.Rating;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@Service
public class MovieInfoService {

    @Autowired
    public RestTemplate restTemplate;

    @Value("${movie-service.host}")
    private String movieServiceHost;

    @Value("${movie-service.uri}")
    private String movieServiceUri;

    @HystrixCommand(fallbackMethod = "getFallBackCatalogItem")
    public CatalogItem getCatalogItem(Rating rating) {
        URI getMovieInfoUri = URI.create(movieServiceHost + movieServiceUri + "/" + rating.getMovieId());
        Movie movie = restTemplate.getForObject(getMovieInfoUri.toString(), Movie.class);
        return new CatalogItem(movie.getName(), movie.getDescription(), rating.getRating(), movie.getVoteAverage(), movie.getPosterPath());
    }

    // fall back method for getCatalogItem if movie-info-service is breaking the circuit
    private CatalogItem getFallBackCatalogItem(Rating rating) {
        return new CatalogItem("Not Found", "Not Found", 0, 0F, "xd");
    }
}
