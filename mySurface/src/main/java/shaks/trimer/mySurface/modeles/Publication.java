package shaks.trimer.mySurface.modeles;


import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column
    @Size(min=2, message = "saisir au moins 6 caracteres")
    public String message;

    @Column
    private LocalDate datePub=LocalDate.now();

    @Column
    private int nbreLike;

    @Column
    private String url;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;
}

