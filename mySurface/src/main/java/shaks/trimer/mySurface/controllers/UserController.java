package shaks.trimer.mySurface.controllers;

import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;
import shaks.trimer.mySurface.modeles.User;
import shaks.trimer.mySurface.services.UserServiceImpl;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/api/user/")
public class UserController {

    public final UserServiceImpl userService;

    @PostMapping
    public User createUser(@RequestBody User user){
        return userService.creer(user);
    }
    // List .........................................
    @GetMapping("list")
    public List<User> getUsers(){
        return userService.getAll();
    }

    // ByLogin........................................
    @GetMapping("getByLogin/{login}")
    public User getByLogin(@PathVariable String login){
        return userService.searchByLogin(login);
    }

    //ByID..............................................
    @GetMapping("getById/{id}")
    public User getById(@PathVariable Long id){
        return userService.searchById(id);
    }

    @PutMapping("update/{id}")
    public User updateUser(@RequestBody User user, @PathVariable Long id){
        return userService.modifier(user,id);
    }

    @DeleteMapping("delete/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.supprimer(id);
    }

    @PostMapping("/connexion/{login}/{mdp}")
    public User connexion(@PathVariable String login, @PathVariable String mdp){
        User user=userService.findByLoginAndMdp(login,mdp);

        String issuer=user.id.toString();




        return null;
    }



}
