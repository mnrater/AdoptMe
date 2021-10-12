package account;

import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import pet.Pet;

import java.sql.ResultSet;
import java.sql.SQLException;

@Component
public class AccountRowMapper implements RowMapper<Account> {

    @Override
    public Account mapRow(ResultSet rs, int i) throws SQLException {
        final Account account = new Account();
        account.setId(rs.getInt("id"));
        account.setEmail(rs.getString("email"));
        account.setPassword(rs.getString("password"));
        account.setPhoneNumber(rs.getString("phonenumber"));
        account.setAddress(rs.getString("address"));
        return account;
    }
}
