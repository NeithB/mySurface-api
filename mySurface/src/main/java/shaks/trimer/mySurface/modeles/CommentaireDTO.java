package shaks.trimer.mySurface.modeles;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CommentaireDTO {
    private Long id;
    private String contenu;
    private Long idUser;
    private Long idPub;



    @Override
    public String toString() {
        return "CommentaireDTO{" +
                "id=" + id +
                ", contenu='" + contenu + '\'' +
                ", idUser=" + idUser +
                ", idPub=" + idPub +
                '}';
    }
}
