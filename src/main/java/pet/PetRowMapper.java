package pet;


import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

@Component
public class PetRowMapper implements RowMapper<Pet> {

    public boolean checkIfColumnExist(ResultSet rs, String nameColumn) throws SQLException {
        ResultSetMetaData rsmd = rs.getMetaData();
        int columns = rsmd.getColumnCount();
        for (int x = 1; x <= columns; x++) {
            if (nameColumn.equals(rsmd.getColumnName(x))) return true;
        }
        return false;
    }

    @Override
    public Pet mapRow(ResultSet rs, int i) throws SQLException {
        final Pet pet = new Pet();
        pet.setId(rs.getInt("id"));
        pet.setName(rs.getString("name"));
        pet.setAge(rs.getInt("age"));
        pet.setDescribtion(rs.getString("describtion"));
        pet.setPhoto(rs.getString("link"));
        pet.setShelter_id(rs.getInt("shelter_id"));
        if (checkIfColumnExist(rs, "pettypes_id")) pet.setType(rs.getString("pettypes_id"));
        if (checkIfColumnExist(rs, "status")) pet.setType(rs.getString("status"));
        return pet;
    }
}
