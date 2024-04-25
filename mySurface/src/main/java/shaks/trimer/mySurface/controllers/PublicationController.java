package shaks.trimer.mySurface.controllers;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import shaks.trimer.mySurface.modeles.Publication;
import shaks.trimer.mySurface.services.PublicationServiceImpl;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/publication/")
public class PublicationController {

    public final PublicationServiceImpl publicationService;

    @PostMapping("create")
    public Publication createPb(@RequestBody Publication pb){
        return publicationService.creer(pb);
    }
    @GetMapping("list")
    public List<Publication> listPb(){
        return publicationService.getAll();
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
