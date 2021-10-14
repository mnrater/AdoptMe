package account;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import pet.Pet;
import pet.PetRepository;

import java.util.List;

@Service
public class AccountService {

    private final AccountRepository repository;

    public AccountService(AccountRepository repository) {
        this.repository = repository;
    }

    public Account getAccount(int id) {
        return repository.findAccountById(id);
    }

    public List<Account> getAllAccounts() {
        return repository.finAll();
    }

    public List<Pet> getAllPetsForAccount(int id){
        return repository.findPetsForAccount(id);
    }
}
