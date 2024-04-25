package shaks.trimer.mySurface.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import shaks.trimer.mySurface.modeles.User;
import shaks.trimer.mySurface.repository.UserRepository;
import shaks.trimer.mySurface.services.objectSerciceInterface.ObjectService;

import java.util.List;

@Service
@AllArgsConstructor
public class UserServiceImpl implements ObjectService<User> {

    public final UserRepository userRepository;
    @Override
    public User creer(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return this.userRepository.findAll();
    }

    @Override
    public User modifier(User userUp, Long id) {
        User userBD=searchById(id);

            userBD.setNom(userUp.getNom());
            userBD.setPrenom(userUp.getPrenom());
            userBD.setMdp(userUp.getMdp());

        return creer(userBD);
    }

    @Override
    public void supprimer(Long id) {
        this.userRepository.deleteById(id);
    }

    @Override
    public User searchById(Long id) {
        return this.userRepository.findById(id).orElseThrow(()->new RuntimeException("Utilisateur non trouvé"));
    }


    @Override
    public User searchByLogin(String login) {
        return this.userRepository.findByLogin(login);
    }
}
