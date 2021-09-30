package Pet;


import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class IdRowMapper implements RowMapper<Integer> {
    @Override
    public Integer mapRow(ResultSet rs, int i) throws SQLException {
        return rs.getInt("id");
    }
}
