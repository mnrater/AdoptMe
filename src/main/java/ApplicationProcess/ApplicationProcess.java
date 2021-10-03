package applicationProcess;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "applicationProcess")
public class ApplicationProcess {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(length = 40)
    private long userID;

    @Column(length = 40)
    private long petID;

    @Column(length = 100)
    private ApplicationProcessStatus status;

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

    public long getPetID() {
        return petID;
    }

    public void setPetID(long petID) {
        this.petID = petID;
    }

    public ApplicationProcessStatus getStatus() {
        return status;
    }

    public void setStatus(ApplicationProcessStatus status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ApplicationProcess that = (ApplicationProcess) o;
        return id == that.id && userID == that.userID && petID == that.petID && status == that.status;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userID, petID, status);
    }
}