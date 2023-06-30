package berkay.moviecatalogservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class Movie {

    private String movieId;
    private String name;
    private String description;
    private float voteAverage;
    private String posterPath;
}
