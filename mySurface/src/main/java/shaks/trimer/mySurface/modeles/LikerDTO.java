package shaks.trimer.mySurface.modeles;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LikerDTO {


    private Long id;
    private Long idLikeUser;
    private Long idLikePub;

    @Override
    public String toString() {
        return "LikerDTO{" +
                "id=" + id +
                ", idLikeUser=" + idLikeUser +
                ", idLikePub=" + idLikePub +
                '}';
    }
}
