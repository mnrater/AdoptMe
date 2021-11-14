package pet;

import account.AccountRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class PetRepository {

    private static final String FIND_ALL = "select pet.id, pet.name, pet.age, pet.describtion ,pet.pettypes_id, image.link, pet_shelter.shelter_id from pet right join image_pet on pet.id = image_pet.pet_id right join image on image_pet.image_id = image.id right join pet_shelter on pet.id = pet_shelter.pet_id";
    private static final String FIND_ONE_BY_ID = "select pet.id, pet.name, pet.age, pet.describtion ,pet.pettypes_id, image.link, pet_shelter.shelter_id from pet right join image_pet on pet.id = image_pet.pet_id right join image on image_pet.image_id = image.id right join pet_shelter on pet.id = pet_shelter.pet_id where pet.id = ?";
    private static final String CREATE = "INSERT INTO Pet(name, age, photo, pettypes_id) VALUES (:name, :age, :photo, :type)";
    private static final String UPDATE = "";

    private final NamedParameterJdbcTemplate namedTemplate;
    private final JdbcTemplate template;

    @Autowired
    public PetRepository(DataSource dataSource) {
        this.namedTemplate = new NamedParameterJdbcTemplate(dataSource);
        this.template = new JdbcTemplate(dataSource);
    }

    public List<Pet> findAll() {
        return namedTemplate.query(FIND_ALL, new PetRowMapper());
    }

    public Pet findPetById(int id) {
        return template.queryForObject(FIND_ONE_BY_ID, new PetRowMapper(), id);
    }

    public Pet create(Pet pet) {
        MapSqlParameterSource source = new MapSqlParameterSource();
        source.addValue("name", pet.getName());
        source.addValue("age", pet.getAge());
        source.addValue("describtion", pet.getDescribtion());
        source.addValue("link", pet.getPhoto());
        source.addValue("type", pet.getType());
        final List<Integer> query = namedTemplate.query(CREATE, source, new IdRowMapper());
        pet.setId(query.stream().findFirst().orElseThrow(RuntimeException::new));
        return pet;
    }

//    public Pet update(Pet pet) {
//        MapSqlParameterSource source = new MapSqlParameterSource();
//        source.addValue("name", pet.getName());
//        source.addValue("age", pet.getAge());
//        source.addValue("shelter_id", pet.getShelterID());
//        source.addValue("photo", pet.getPhoto());
//        source.addValue("type", pet.getType());
//        final List<Integer> query = namedTemplate.query(UPDATE, source, new IdRowMapper());
//        pet.setId(query.stream().findFirst().orElseThrow(RuntimeException::new));
//        return pet;
//    }
}
