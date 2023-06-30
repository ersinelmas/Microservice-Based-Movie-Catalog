package berkay.moviecatalogservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Represents A movie Rating.
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class Rating {

    private String movieId;
    private int rating;

}
