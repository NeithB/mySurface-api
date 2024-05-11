package shaks.trimer.mySurface.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import shaks.trimer.mySurface.modeles.Commentaire;
import shaks.trimer.mySurface.modeles.Publication;

import java.util.List;

@Repository
public interface CommentaireRepository extends JpaRepository<Commentaire, Long> {
    List<Commentaire> findAllByOrderByIdDesc();
    @Query(value="select * from Commentaire  where publication_id =:id order by id desc",nativeQuery = true)
    List<Commentaire> findAllByPublicationByID(@Param("id") Long id);
}
