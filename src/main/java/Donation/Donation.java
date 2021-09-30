package Donation;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Objects;

@Entity
@Table(name = "donation")
public class Donation {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(length = 40)
    private long userID;

    @Column(length = 40)
    private long shelterID;

    @Column(length = 100)
    private BigDecimal amount;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public long getShelterID() {
        return shelterID;
    }

    public void setShelterID(long shelterID) {
        this.shelterID = shelterID;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Donation donation = (Donation) o;
        return id == donation.id && userID == donation.userID && shelterID == donation.shelterID && Objects.equals(amount, donation.amount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userID, shelterID, amount);
    }
}
