package shaks.trimer.mySurface.modeles;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long id;

    @Column
    @Size(min=2, message = "saisir au moins 6 caracteres")
    public String message;

    @Column
    public String url;

    @ManyToOne
    @JoinColumn(name="user_id")
    public User user;
}
