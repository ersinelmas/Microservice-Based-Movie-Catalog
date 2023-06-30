package berkay.movieinfoservice.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
public class Movie {

    private String movieId;
    private String name;
    private String description;
    private float voteAverage;
    private String posterPath;
}
