package shaks.trimer.mySurface.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import shaks.trimer.mySurface.modeles.Commentaire;
import shaks.trimer.mySurface.modeles.Liker;
import shaks.trimer.mySurface.modeles.Publication;
import shaks.trimer.mySurface.modeles.User;

import java.util.List;

@Repository
public interface LikerRepository extends JpaRepository<Liker,Long> {

    @Query(value="select * from liker  where user_id =:idUser and publication_id=:idPub limit 1",nativeQuery = true )
    Liker findByLike(@Param("idUser") Long idUser, @Param("idPub") Long idPub);

    @Query(value="delete from liker  where user_id =:idUser and publication_id=:idPub limit 1",nativeQuery = true )
    Liker deleteLike(@Param("idUser") Long idUser, @Param("idPub") Long idPub);
    @Query(value="select * from liker  where publication_id=:idPub Limit 1" ,nativeQuery = true )
    Liker findByPublicationId(@Param("idPub") Long idPub);

    @Query(value="select count(id)+1 from liker  where publication_id=:idPub",nativeQuery = true )
    Long nbreLike(@Param("idPub") Long idPub);




}
