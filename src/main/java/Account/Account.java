package Account;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(length = 40, name = "coolname")
    private String email;

    @Column(length = 40)
    private String password;

    @Column(length = 100)
    private String phoneNumber;

    @Column(length = 100)
    private String address;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Account account = (Account) o;
        return id == account.id && Objects.equals(email, account.email) && Objects.equals(password, account.password) && Objects.equals(phoneNumber, account.phoneNumber) && Objects.equals(address, account.address);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, password, phoneNumber, address);
    }
}
