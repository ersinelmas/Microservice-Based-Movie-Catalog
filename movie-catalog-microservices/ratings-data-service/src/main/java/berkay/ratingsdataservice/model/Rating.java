package berkay.ratingsdataservice.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Getter @Setter
public class Rating {

    private final String movieId;
    private final int rating;

}
