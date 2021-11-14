package shelter;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "shelter")
public class Shelter {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @Column(length = 40, name = "coolname")
    private String name;

    @Column(length = 40)
    private String creationDate;

    @Column(length = 40)
    private double map_lat;

    @Column(length = 40)
    private double map_lng;

    @Column(length = 200)
    private String photo;

    @Column(length = 40)
    private String city;

    @Column(length = 100)
    private String address;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public double getMap_lat() {
        return map_lat;
    }

    public void setMap_lat(double map_lat) {
        this.map_lat = map_lat;
    }

    public double getMap_lng() {
        return map_lng;
    }

    public void setMap_lng(double map_lng) {
        this.map_lng = map_lng;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
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
        Shelter shelter = (Shelter) o;
        return id == shelter.id && Objects.equals(name, shelter.name) && Objects.equals(creationDate, shelter.creationDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, creationDate);
    }
}
