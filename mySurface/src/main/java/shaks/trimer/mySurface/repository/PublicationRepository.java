package shaks.trimer.mySurface.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import shaks.trimer.mySurface.modeles.Publication;

import java.util.List;

@Repository
public interface PublicationRepository extends JpaRepository<Publication,Long> {

    List<Publication> findAllByOrderByIdDesc();



}
