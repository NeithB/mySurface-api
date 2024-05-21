package shaks.trimer.mySurface.modeles;


import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @Size(min=2, message = "saisir au moins 6 caracteres")
    private String message;

    @Column
    private LocalDate datePub=LocalDate.now();

    @Column
    private int nbreLike;

    @Column
    private String url;

    @Column
    private String image;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

//    @OneToMany(mappedBy = "publication")
//    private List<Commentaire> commentaireList;

    @Override
    public String toString() {
        return "Publication{" +
                "id=" + id +
                ", message='" + message + '\'' +
                ", datePub=" + datePub +
                ", nbreLike=" + nbreLike +
                ", url='" + url + '\'' +
                ", user=" + user +
                '}';
    }
}

