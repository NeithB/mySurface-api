package shaks.trimer.mySurface.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import shaks.trimer.mySurface.modeles.User;

public interface UserRepository extends JpaRepository<User,Long> {
    User findByLogin(String login);
    User findByLoginAndMdp(String login, String mdp);


}
