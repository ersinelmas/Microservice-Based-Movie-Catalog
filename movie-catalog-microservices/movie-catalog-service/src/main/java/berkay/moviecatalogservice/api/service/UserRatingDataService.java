package berkay.moviecatalogservice.api.service;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import berkay.moviecatalogservice.model.Rating;
import berkay.moviecatalogservice.model.UserRating;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.util.Arrays;

@Service
public class UserRatingDataService {

    @Autowired
    public RestTemplate restTemplate;

    @Value("${ratings-service.host}")
    private String ratingsDataServiceHost;

    @Value("${ratings-service.uri}")
    private String ratingsDataServiceUri;

    @HystrixCommand(fallbackMethod = "getFallBackUserRating")
    public UserRating getUserRating(String userId) {
        URI getUserRatingsUri = URI.create(ratingsDataServiceHost + ratingsDataServiceUri + "/" + userId);
        return restTemplate.getForObject(getUserRatingsUri.toString(), UserRating.class);
    }

    // fall back method for getUserRating if ratings-data-service is breaking the circuit
    private UserRating getFallBackUserRating(String userId) {
        UserRating userRating = new UserRating();
        userRating.setUserId(userId);
        userRating.setUserRatings(Arrays.asList(new Rating("NA", 0)));

        return userRating;
    }

}
