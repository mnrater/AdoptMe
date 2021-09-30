package Pet;

public enum PetType {
    DOG(1),
    CAT(2),
    HORSE(3);

    private int id;

    PetType(int id) {
        this.id = id;
    }
}
