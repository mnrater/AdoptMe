package BlogEntry;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "blogEntry")
public class BlogEntry {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(length = 40)
    private long userID;

    @Column(length = 40)
    private String content;

    @Column(length = 100)
    private String photo;

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BlogEntry blogEntry = (BlogEntry) o;
        return id == blogEntry.id && userID == blogEntry.userID && Objects.equals(content, blogEntry.content) && Objects.equals(photo, blogEntry.photo);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userID, content, photo);
    }
}
