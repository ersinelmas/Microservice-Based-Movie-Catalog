package berkay.moviecatalogservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Model class which as the response of the API
 */
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class CatalogItem {

    private String name;
    private String description;
    private int rating;
    private float voteAverage;
    private String posterPath;
}
