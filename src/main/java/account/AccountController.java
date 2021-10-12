package account;

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
        return service.getAllFromAccount(id);
    }

    @RequestMapping("/account/{id}/my_pets")
    @ResponseBody
    public List<Pet> getPet(@PathVariable(value = "id") Integer id) {
        return service.getAllPetsForAccount(id);
    }

}
