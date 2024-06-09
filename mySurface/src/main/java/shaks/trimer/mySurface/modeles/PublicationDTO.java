package shaks.trimer.mySurface.modeles;


import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PublicationDTO {
    public Long id;

    public String message;


    private LocalDate datePub=LocalDate.now();


    private Long nbreLike;


    private String url;

    private String image;


    private Long user_id;


}
