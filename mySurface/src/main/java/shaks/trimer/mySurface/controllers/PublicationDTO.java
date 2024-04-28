package shaks.trimer.mySurface.controllers;


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


    private int nbreLike;


    private String url;


    private Long user_id;


}
