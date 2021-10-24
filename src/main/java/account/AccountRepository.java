package account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import pet.Pet;
import pet.PetRowMapper;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class AccountRepository {

    private static final String FIND_ALL = "SELECT id, email, password, phonenumber, address FROM account";
    private static final String FIND_ONE_BY_ID = "SELECT id, email, password, phonenumber, address FROM account WHERE id=?";
    private static final String CREATE = "INSERT INTO account(email, password, phonenumber, address) VALUES (:email, :password, :phonenumber, :address)";
    private static final String PETS_FOR_ACCOUNT = "SELECT id, name, age, photo, pettypes_id FROM account_pet INNER JOIN pet ON pet_id=id WHERE account_id=?";
    private static final String UPDATE = "";

    private final NamedParameterJdbcTemplate namedTemplate;
    private final JdbcTemplate template;

    @Autowired
    public AccountRepository(DataSource dataSource) {
        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.template = new JdbcTemplate(dataSource);
    }


    public Account findAccountById(int id) {
        return template.queryForObject(FIND_ONE_BY_ID, new AccountRowMapper(), id);
    }

    public List<Account> finAll() {
        return namedTemplate.query(FIND_ALL, new AccountRowMapper());
    }

    public List<Pet> findPetsForAccount(int id) {
        return template.query(PETS_FOR_ACCOUNT, new PetRowMapper(), id);
    }
}