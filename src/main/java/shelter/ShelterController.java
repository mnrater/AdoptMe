package shelter;

import account.Account;
import account.AccountService;
import org.springframework.web.bind.annotation.*;
import pet.Pet;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ShelterController {

    private final ShelterService service;

    public ShelterController(ShelterService service){
        this.service = service;
    }

    @GetMapping("/shelter")
    public List<Shelter> getAll(){
        return service.getAllshelters();
    }

    @RequestMapping("/shelter/{id}")
    @ResponseBody
    public Shelter getAccount(@PathVariable(value = "id") Integer id) {
        return service.getShelterById(id);
    }

    @RequestMapping("/shelter/{id}/my_pets")
    @ResponseBody
    public List<Pet> getAllPetsForShelter(@PathVariable(value = "id") Integer id){
        return service.getAllPetsForShelter(id);
    }
}
