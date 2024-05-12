package shaks.trimer.mySurface.services.objectSerciceInterface;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ObjectService <T>{
    T creer(T t);
     List<T>getAll();

    List<T>getAllByOrderIDDesc();
    T modifier(T t, Long id);
    void supprimer(Long id);
    T searchById(Long id);

    T searchByLogin(String login);

    T findByLoginAndMdp(String l, String m);
    List<T> getAllbyPub(Long id);
    Long nbre();



}
