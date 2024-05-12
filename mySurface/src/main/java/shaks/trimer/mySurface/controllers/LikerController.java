package shaks.trimer.mySurface.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import shaks.trimer.mySurface.modeles.Liker;
import shaks.trimer.mySurface.modeles.LikerDTO;
import shaks.trimer.mySurface.modeles.Publication;
import shaks.trimer.mySurface.modeles.User;
import shaks.trimer.mySurface.repository.LikerRepository;
import shaks.trimer.mySurface.services.PublicationServiceImpl;
import shaks.trimer.mySurface.services.UserServiceImpl;
import shaks.trimer.mySurface.services.objectSerciceInterface.LikerServiceImpl;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/liker/")
public class LikerController {

    public final LikerServiceImpl likerService;
    public final LikerRepository likerRepository;
    public final UserServiceImpl userService;
    public final PublicationServiceImpl publicationService;

    @PostMapping
    public Liker creer(@RequestBody  LikerDTO likeDTO){
        System.out.print(likeDTO);
       Liker like=new Liker();
            Long idUser=likeDTO.getIdLikeUser();
            Long idPub=likeDTO.getIdLikePub();
            User user=userService.searchById(idUser);
            Publication publication=publicationService.searchById(idPub);
       like.setUser(user);
       like.setPublication(publication);

        return likerService.creer(like);
    }

    @GetMapping
    public List<Liker> getALL(){
        return likerService.getAll();
    }
    @GetMapping("/nbreLike")
    public Long nbreLike(){
        return likerService.nbre();
    }
    @GetMapping("/find/{idUser}/{idPub}")
    public Long findByidUserAndIdPub(@PathVariable Long idUser, @PathVariable Long idPub){
        return likerRepository.findByUserIDAndPublicationId(idUser,idUser);
    }


    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable long id){
        likerService.supprimer(id);
    }
    @PutMapping("/update/{id}")
    public Liker update(@RequestBody Liker like, @PathVariable long id){
        return likerService.modifier(like,id);
    }


}
