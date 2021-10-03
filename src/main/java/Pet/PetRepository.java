package pet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class PetRepository {

    private static final String FIND_ALL = "SELECT id, name, age, photo, pettypes_id FROM Pet";
    private static final String FIND_ONE_BY_ID = "SELECT id, name, age, photo, pettypes_id FROM Pet WHERE id = :id";
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

    public Pet findOne(Pet pet) {
        MapSqlParameterSource source = new MapSqlParameterSource();
        source.addValue("id", pet.getId());
        final List<Pet> found_pets = namedTemplate.query(FIND_ONE_BY_ID, source, new PetRowMapper());
        return found_pets.stream().findFirst().orElseThrow(RuntimeException::new);
    }

    public Pet create(Pet pet) {
        MapSqlParameterSource source = new MapSqlParameterSource();
        source.addValue("name", pet.getName());
        source.addValue("age", pet.getAge());
        source.addValue("photo", pet.getPhoto());
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
