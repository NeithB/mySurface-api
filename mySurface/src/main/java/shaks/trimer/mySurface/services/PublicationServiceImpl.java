package shaks.trimer.mySurface.services;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;
import shaks.trimer.mySurface.modeles.Publication;
import shaks.trimer.mySurface.repository.PublicationRepository;
import shaks.trimer.mySurface.services.objectSerciceInterface.ObjectService;

import java.util.List;

@Service
@AllArgsConstructor

public class PublicationServiceImpl implements ObjectService<Publication>{

    public final PublicationRepository publicationRepository;
    @Override
    public Publication creer(Publication publication) {
        return publicationRepository.save(publication);
    }

    @Override
    public List<Publication> getAll() {
        return this.publicationRepository.findAll();
    }

    @Override
    public List<Publication> getAllByOrderIDDesc() {
        return this.publicationRepository.findAllByOrderByIdDesc();
    }

    @Override
    public Publication modifier(Publication publicationUp, Long id) {
        Publication publicationBD=searchById(id);

            publicationBD.setUrl(publicationUp.getUrl());
            publicationBD.setUrl(publicationUp.getUrl());

        return this.publicationRepository.save(publicationBD);
    }

    @Override
    public void supprimer(Long id) {
        this.publicationRepository.deleteById(id);

    }

    @Override
    public Publication searchById(Long id) {
        return this.publicationRepository.findById(id).orElseThrow(()-> new RuntimeException("Publication non trouvée"));
    }

    @Override
    public Publication searchByLogin(String login) {
        return null;
    }

    @Override
    public Publication findByLoginAndMdp(String l, String m) {
        return null;
    }

    @Override
    public List<Publication> getAllbyPub(Long id) {
        return null;
    }

    @Override
    public Long nbre() {
        return this.publicationRepository.count();
    }


}
