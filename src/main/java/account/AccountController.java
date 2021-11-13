package account;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pet.Pet;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class AccountController {

    private final AccountService service;

    public AccountController(AccountService service){
        this.service = service;
    }

    @GetMapping("/account")
    public List<Account> getAll(){
        return service.getAllAccounts();
    }

    @RequestMapping("/account/{id}")
    @ResponseBody
    public Account getAccount(@PathVariable(value = "id") Integer id) {
        return service.getAccount(id);
    }

    @RequestMapping("/account/{id}/my_pets")
    @ResponseBody
    public List<Pet> getPet(@PathVariable(value = "id") Integer id) {
        return service.getAllPetsForAccount(id);
    }

    @RequestMapping(value="/account/{id}/change_data", method = RequestMethod.POST, consumes = "application/json")
    public void updateData(@PathVariable(value = "id") Integer id, @RequestBody Account account) {
        service.updateAccount(id, account.getEmail(), account.getPassword(), account.getPhoneNumber(), account.getAddress());
    }

    @GetMapping("/account/{id}/my_addoptions")
    public List<Pet> myAddoptions(@PathVariable(value = "id") Integer id){
        return service.getAllAddoptions(id);
    }
}
