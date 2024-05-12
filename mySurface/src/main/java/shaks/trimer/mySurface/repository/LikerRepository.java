package shaks.trimer.mySurface.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import shaks.trimer.mySurface.modeles.Commentaire;
import shaks.trimer.mySurface.modeles.Liker;

import java.util.List;

@Repository
public interface LikerRepository extends JpaRepository<Liker,Long> {

    @Query(value="select id from liker  where user_id =:idUser and publication_id=:idPub",nativeQuery = true )
    Long findByUserIDAndPublicationId(@Param("idUser") Long idUser, @Param("idPub") Long idPub);
}
