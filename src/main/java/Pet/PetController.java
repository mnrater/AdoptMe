package pet;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class PetController {

    private final PetService service;

    public PetController(PetService service) {
        this.service = service;
    }

    @GetMapping("/pets")
    public List<Pet> getPets() {
        return service.getAllPets();
    }
//
//    @PostMapping("/pets")
//    @ResponseStatus(HttpStatus.CREATED)
//    public Pet addPet(@RequestBody Pet pet) {
//        return service.createPet(pet);
//    }
//
//    @GetMapping("/pets/{id}")
//    public Optional<Pet> getPetById(@PathVariable long id) {
//        return service.getPetById(id);
//    }
}
