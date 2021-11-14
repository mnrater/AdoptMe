package shelter;

import account.Account;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ShelterRowMapper implements RowMapper<Shelter> {

    @Override
    public Shelter mapRow(ResultSet rs, int i) throws SQLException {
        final Shelter shelter = new Shelter();
        shelter.setId(rs.getInt("id"));
        shelter.setName(rs.getString("name"));
        shelter.setCreationDate(rs.getString("creation_date"));
        shelter.setMap_lat(rs.getDouble("maps_lat"));
        shelter.setMap_lng(rs.getDouble("maps_lng"));
        shelter.setPhoto(rs.getString("link"));
        shelter.setCity(rs.getString("city"));
        shelter.setAddress(rs.getString("address"));
        return shelter;

    }
}
