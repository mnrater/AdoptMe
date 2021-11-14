package pet;

public enum PetType {
    CAT(1),
    DOG(2),
    HORSE(3),
    OTHER(4);


    private int id;

    PetType(int id) {
        this.id = id;
    }
}
