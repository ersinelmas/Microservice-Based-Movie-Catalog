package berkay.moviecatalogservice.api.controller;

import berkay.moviecatalogservice.api.service.UserRatingDataService;
import berkay.moviecatalogservice.model.CatalogItem;
import berkay.moviecatalogservice.model.UserRating;
import berkay.moviecatalogservice.api.service.MovieInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("/catalog")
public class MovieCatalogController {

    @Autowired
    public MovieInfoService movieInfoService;

    @Autowired
    public UserRatingDataService userRatingDataService;

    /**
     * 1. Get the movie IDs of movies which are rated by user.
     *
     * 2. For each movie that is rated by the user, get movie information.
     *
     * 3. Return a combined result.
     *
     * @param userId
     * @return
     */
    @RequestMapping("/{userId}")
    public List<CatalogItem> getCatalog(@PathVariable("userId") String userId) {
        UserRating userRating = userRatingDataService.getUserRating(userId);
        return userRating.getUserRatings().stream().map(rating -> movieInfoService.getCatalogItem(rating)).collect(Collectors.toList());
    }


}
