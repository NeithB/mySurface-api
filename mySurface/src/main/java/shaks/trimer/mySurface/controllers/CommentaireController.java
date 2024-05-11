package shaks.trimer.mySurface.controllers;

import ch.qos.logback.core.util.SystemInfo;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import shaks.trimer.mySurface.modeles.Commentaire;
import shaks.trimer.mySurface.modeles.CommentaireDTO;
import shaks.trimer.mySurface.modeles.Publication;
import shaks.trimer.mySurface.modeles.User;
import shaks.trimer.mySurface.repository.CommentaireRepository;
import shaks.trimer.mySurface.services.PublicationServiceImpl;
import shaks.trimer.mySurface.services.UserServiceImpl;
import shaks.trimer.mySurface.services.objectSerciceInterface.CommentaireImpl;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/commentaire/")
@AllArgsConstructor
public class CommentaireController  {

    public final CommentaireImpl commentaireImpl;
    public final PublicationServiceImpl publicationService;
    public final UserServiceImpl userService;
    public final CommentaireRepository commentaireRepository;

    @PostMapping
    public Commentaire creer(@RequestBody CommentaireDTO commentaireDTO){
        Commentaire commentaire=new Commentaire();
            Long pub_id=commentaireDTO.getIdPub();
            Long user_id=commentaireDTO.getIdUser();

            commentaire.setId(commentaireDTO.getId());
            commentaire.setContenu(commentaireDTO.getContenu());
                     Publication publication=publicationService.searchById(pub_id);
                     User user=userService.searchById(user_id);

            commentaire.setPublication(publication);
            commentaire.setUser(user);
        return commentaireImpl.creer(commentaire);
    }
    @GetMapping
    public List<Commentaire> getALL(){
        return commentaireImpl.getAllByOrderIDDesc();
    }
    @GetMapping("/pub/{id}")
    public List<Commentaire> getALLBy(@PathVariable long id){
        return commentaireRepository.findAllByPublicationByID(id);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        commentaireImpl.supprimer(id);
    }

    @PutMapping("update/{id}")
    public Commentaire updatePb(@RequestBody Commentaire commentaire, @PathVariable Long id){
        return commentaireImpl.modifier(commentaire,id);
    }




}
