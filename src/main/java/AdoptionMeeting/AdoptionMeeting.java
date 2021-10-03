package adoptionMeeting;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "adoptionMeetings")
public class AdoptionMeeting {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(length = 40)
    private String date;

    @Column(length = 40)
    private long shelterID;

    @Column(length = 100)
    private long userID;

    @Column(length = 100)
    private long petID;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public long getShelterID() {
        return shelterID;
    }

    public void setShelterID(long shelterID) {
        this.shelterID = shelterID;
    }

    public long getUserID() {
        return userID;
    }

    public void setUserID(long userID) {
        this.userID = userID;
    }

    public long getPetID() {
        return petID;
    }

    public void setPetID(long petID) {
        this.petID = petID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AdoptionMeeting that = (AdoptionMeeting) o;
        return id == that.id && Objects.equals(date, that.date) && Objects.equals(shelterID, that.shelterID) && Objects.equals(userID, that.userID) && Objects.equals(petID, that.petID);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, date, shelterID, userID, petID);
    }
}