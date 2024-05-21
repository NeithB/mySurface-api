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
            Boolean statut=true;
            Publication publication=publicationService.searchById(idPub);
       like.setUser(user);
       like.setPublication(publication);
       like.setStatut(statut);

       publication.setNbreLike(likerService.nbre(likeDTO.getIdLikePub()));

        return likerService.creer(like);
    }

    @GetMapping
    public List<Liker> getALL(){
        return likerService.getAll();
    }

    @GetMapping("/find/{idUser}/{idPub}")
    public Liker findByidUserAndIdPub(@PathVariable Long idUser, @PathVariable Long idPub){
        return likerService.exist(idUser,idPub);
    }

    @DeleteMapping("/delete/{idUser}/{idPub}")
    public Liker deleteLike(@PathVariable Long idUser, @PathVariable Long idPub){
        Liker like=likerService.deleteExist(idUser,idPub);

        Publication publication=publicationService.searchById(idPub);
        publication.setNbreLike(likerService.nbre(idPub));
        return like;
    }

    @GetMapping("/find/{idPub}")
    public Liker likeByPubId(@PathVariable Long idPub){
        return likerService.likeByPubId(idPub);
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
