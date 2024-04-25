package shaks.trimer.mySurface.modeles;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column
    @NotBlank
    @Size(min=2,message = "saisir au moins 2 caracteres")
    public String nom;

    @Column
    @NotBlank
    @Size(min=2, message = "saisir au moins 2 caracteres")
    public String prenom;

    @Column
    @NotBlank
    @Size(min=6, message = "saisir au moins 2 caracteres")
    public String login;

    @Column
    @NotBlank
    @Size(min=6, message = "saisir au moins 2 caracteres")
    public String mdp;


    @Column
    @Size(min=2, message = "saisir au moins 2 caracteres")
    public String image;

    @Column
    public String statut="Client";

    @OneToMany(mappedBy = "user")
    public List<Publication> publicationList;


    public void addPublication(Publication publication){
        if(publicationList==null){
            publicationList=new ArrayList<>();
        }
        publication.setUser(this);
        publicationList.add(publication);
    }


}
