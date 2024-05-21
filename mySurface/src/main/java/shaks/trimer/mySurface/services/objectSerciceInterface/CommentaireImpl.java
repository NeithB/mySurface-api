package shaks.trimer.mySurface.services.objectSerciceInterface;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import shaks.trimer.mySurface.modeles.Commentaire;
import shaks.trimer.mySurface.repository.CommentaireRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class CommentaireImpl implements ObjectService<Commentaire> {

    public  final CommentaireRepository commentaireRepository;
    @Override
    public Commentaire creer(Commentaire commentaire) {
        return this.commentaireRepository.save(commentaire);
    }
    @Override
    public List<Commentaire> getAll() {
        return this.commentaireRepository.findAll();
    }

    @Override
    public Commentaire searchById(Long id) {
        return this.commentaireRepository.findById(id).orElseThrow(()->new RuntimeException("Utilisateur non trouvé"));
    }

    @Override
    public List<Commentaire> getAllByOrderIDDesc() {
        return this.commentaireRepository.findAllByOrderByIdDesc();
    }

    @Override
    public Commentaire modifier(Commentaire ctrUp, Long id) {
        Commentaire ctrBD=searchById(id);
                ctrBD.setContenu(ctrUp.getContenu());
                ctrBD.setPublication(ctrUp.getPublication());
                ctrBD.setUser(ctrUp.getUser());

        return creer(ctrBD);
    }

    @Override
    public void supprimer(Long id) {
        this.commentaireRepository.deleteById(id);

    }
    @Override
    public Commentaire searchByLogin(String login) {
        return null;
    }

    @Override
    public Commentaire findByLoginAndMdp(String l, String m) {
        return null;
    }

    @Override
    public List<Commentaire> getAllbyPub(Long id) {return this.commentaireRepository.findAllByPublicationByID(id);
    }


}
