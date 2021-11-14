package shelter;

import account.Account;
import account.AccountService;
import org.springframework.web.bind.annotation.*;
import pet.Pet;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ShelterController {

    private final ShelterService service;

    public ShelterController(ShelterService service){
        this.service = service;
    }

    @GetMapping("/shelters")
    public List<Shelter> getAll(){
        return service.getAllshelters();
    }

    @RequestMapping("/shelter/{id}")
    @ResponseBody
    public Shelter getShelter(@PathVariable(value = "id") Integer id) {
        return service.getShelterById(id);
    }

    @RequestMapping("/shelters/{id}")
    @ResponseBody
    public Shelter getAccount(@PathVariable(value = "id") Integer id) {
        return service.getShelterById(id);
    }

    @RequestMapping("/shelters/{id}/my_pets")
    @ResponseBody
    public List<Pet> getAllPetsForShelter(@PathVariable(value = "id") Integer id){
        return service.getAllPetsForShelter(id);
    }

    @RequestMapping(value="/shelters/{id}/change_data", method = RequestMethod.POST, consumes = "application/json")
    public void updateData(@PathVariable(value = "id") Integer id, @RequestBody Shelter shelter) throws ParseException {
        String date = shelter.getCreationDate();
        service.updateShelter(id, shelter.getName(), new SimpleDateFormat("yyyy-MM-dd").parse(date));
    }

}
