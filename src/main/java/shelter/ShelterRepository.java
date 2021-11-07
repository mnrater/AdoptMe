package shelter;

import account.AccountRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import pet.Pet;
import pet.PetRowMapper;

import javax.sql.DataSource;
import java.util.Date;
import java.util.List;

@Repository
public class ShelterRepository {

    private static final String FIND_ALL = "SELECT id, name, creationdate FROM shelter";
    private static final String FIND_ONE_BY_ID = "SELECT id, name, creationdate FROM shelter WHERE id=?";
    private static final String CREATE = "INSERT INTO account(name, creationdate) VALUES (:name, :creationdate)";
    private static final String PETS_FOR_SHELTER = "SELECT id, name, age, photo, pettypes_id FROM pet_shelter INNER JOIN pet ON pet_id=id WHERE shelter_id = ?";
    private static final String UPDATE = "UPDATE shelter SET name = ?, creationDate = ? WHERE id = ? ";

    private final NamedParameterJdbcTemplate namedTemplate;
    private final JdbcTemplate template;

    @Autowired
    public ShelterRepository(DataSource dataSource) {
        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.template = new JdbcTemplate(dataSource);
    }
    public List<Shelter> findAll() {
        return namedTemplate.query(FIND_ALL, new ShelterRowMapper());
    }

    public Shelter findShelterById(Integer id) {
        return template.queryForObject(FIND_ONE_BY_ID, new ShelterRowMapper(), id);
    }

    public List<Pet> findAllPetsForShelter(int id){
        return template.query(PETS_FOR_SHELTER, new PetRowMapper(), id);
    }

    public void updateShelter(int id, String name, Date creationDate){
        template.update(UPDATE, name, creationDate, id);
    }
}
