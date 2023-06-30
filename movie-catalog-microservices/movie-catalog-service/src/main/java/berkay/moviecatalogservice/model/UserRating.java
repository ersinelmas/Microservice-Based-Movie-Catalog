package berkay.moviecatalogservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * Wrapper model which contains list of Movies Ratings.
 *
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class UserRating {

    private String userId;
    private List<Rating> userRatings;
}
