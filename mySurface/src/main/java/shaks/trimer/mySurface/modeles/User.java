package shaks.trimer.mySurface.modeles;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

//
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotBlank
    @Size(min=2,message = "saisir au moins 2 caracteres")
    private String nom;

    @Column
    @NotBlank
    @Size(min=2, message = "saisir au moins 2 caracteres")
    private String prenom;

    @Column
    @NotBlank
    @Size(min=6, message = "saisir au moins 2 caracteres")
    private String login;

    @Column
    @NotBlank
    @Size(min=6, message = "saisir au moins 2 caracteres")
    private String mdp;


    @Column
    @Size(min=2, message = "saisir au moins 2 caracteres")
    private String image;

    @Column
    private String statut="Client";

//    @OneToMany(mappedBy = "user")
//    private List<Publication> publicationList;

//    @OneToMany(mappedBy = "user")
//    private List<Commentaire> commentaireList;

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", login='" + login + '\'' +
                ", mdp='" + mdp + '\'' +
                ", image='" + image + '\'' +
                ", statut='" + statut + '\'' +
                '}';
    }
}
