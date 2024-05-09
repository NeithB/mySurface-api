package shaks.trimer.mySurface.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shaks.trimer.mySurface.modeles.Publication;
import shaks.trimer.mySurface.modeles.PublicationDTO;
import shaks.trimer.mySurface.modeles.User;
import shaks.trimer.mySurface.repository.PublicationRepository;
import shaks.trimer.mySurface.services.PublicationServiceImpl;
import shaks.trimer.mySurface.services.UserServiceImpl;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/publication/")
public class PublicationController {

    public final PublicationServiceImpl publicationService;
    public final UserServiceImpl userService;

    @PostMapping
    public Publication createPb(@RequestBody PublicationDTO pb){
       Publication pl=new Publication();

       User user=userService.searchById(pb.getUser_id());
                pl.setUrl(pb.getUrl());
                pl.setDatePub(pb.getDatePub());
                pl.setMessage(pb.getMessage());
                pl.setUser(user);
                pl.setNbreLike(pb.getNbreLike());

        return publicationService.creer(pl);
    }
    @GetMapping
    public List<Publication> listPb(){
        return publicationService.getAllByOrderIDDesc();
    }

    @GetMapping("{id}")
    public Publication getById(@PathVariable Long id){
        return publicationService.searchById(id);
    }
    @PutMapping("update/{id}")
    public Publication updatePb(@RequestBody Publication pb, @PathVariable Long id){
        return publicationService.modifier(pb,id);
    }

    @DeleteMapping("delete/{id}")
    public void deletePb(@PathVariable Long id){
        publicationService.supprimer(id);
    }

}
