package shaks.trimer.mySurface.services.objectSerciceInterface;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import shaks.trimer.mySurface.modeles.Liker;
import shaks.trimer.mySurface.repository.CommentaireRepository;
import shaks.trimer.mySurface.repository.LikerRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class LikerServiceImpl implements ObjectService<Liker> {

    public final LikerRepository likerRepository;
    @Override
    public Liker creer(Liker liker) {
        return this.likerRepository.save(liker) ;
    }

    @Override
    public List<Liker> getAll() {
        return this.likerRepository.findAll();
    }
    @Override
    public Liker searchById(Long id) {
        return this.likerRepository.findById(id).orElseThrow(()->new RuntimeException("Pas de Like trouvée"));
    }

    @Override
    public Liker modifier(Liker likerUp, Long id) {
        Liker likeBD=searchById(id);
        likeBD.setId(likerUp.getId());
        likeBD.setUser(likeBD.getUser());
        likeBD.setPublication(likerUp.getPublication());
        return creer(likeBD);
    }

    @Override
    public void supprimer(Long id) {
        this.likerRepository.deleteById(id);
    }

    @Override
    public List<Liker> getAllByOrderIDDesc() {
        return null;
    }

    @Override
    public Liker searchByLogin(String login) {
        return null;
    }

    @Override
    public Liker findByLoginAndMdp(String l, String m) {
        return null;
    }

    @Override
    public List<Liker> getAllbyPub(Long id) {
        return null;
    }

    @Override
    public Long nbre() {
        return likerRepository.count();
    }
}
