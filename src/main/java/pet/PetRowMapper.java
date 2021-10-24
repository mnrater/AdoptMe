package pet;


import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class PetRowMapper implements RowMapper<Pet> {
    @Override
    public Pet mapRow(ResultSet rs, int i) throws SQLException {
        final Pet pet = new Pet();
        pet.setId(rs.getInt("id"));
        pet.setName(rs.getString("name"));
        pet.setAge(rs.getInt("age"));
        pet.setPhoto(rs.getString("photo"));
        pet.setType(rs.getString("pettypes_id"));
        return pet;
    }
}