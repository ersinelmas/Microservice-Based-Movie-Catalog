package berkay.ratingsdataservice.api;

import berkay.ratingsdataservice.model.Rating;
import berkay.ratingsdataservice.model.UserRating;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/ratings")
public class MovieRatingsController {

    @RequestMapping("/{movieId}")
    public Rating getRating(@PathVariable("movieId") String movieId) {
        return new Rating(movieId, 4);
    }

    // ideally this should get the movies which are rated by the user with passes {userId}
    @RequestMapping("users/{userId}")
    public UserRating getUserRatings(@PathVariable("userId") String userId) {
        List<Rating> ratings = Arrays.asList(
                new Rating("385687", 5), //Fast X
                new Rating("603692", 8), //John Wick 4
                new Rating("502356", 6), // Mario
                new Rating("569094", 7), // Spider-Man: Across the Spider-Verse
                new Rating("238", 10));      //The Godfather

        UserRating userRating = new UserRating(userId, ratings);
        return userRating;
    }

}
