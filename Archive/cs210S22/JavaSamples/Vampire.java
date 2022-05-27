package Discussion1;// Inheritance

    // extends means that it inherits the attributes of Person
public class Vampire extends Person   {
    // instance variable
    private boolean isThirsty;

    // Takes attributes as person and passes them to the super, in this case it is Person
        // - There can be only 1 inheritance of a class!
    public Vampire(String name, double age, String DOB, boolean isThirsty) {
        super(name, age, DOB);
        this.isThirsty = isThirsty;
    }

    // Does the same thing as the above constructor, but instead takes a Person object and extracts data using its built
        // in methods
    public Vampire(Person p, boolean isThirsty) {
        super(p.getName(), p.getAge(), p.getDOB());
        this.isThirsty = isThirsty;
    }

    // altars tbe instance variable - since its private it cannot be accessed from Main, only accessed thru this method
    public void setThirst(boolean state){
        this.isThirsty = state;
    }

    // Converts to a string - good for debugging
    @Override
    public String toString() {
        return "Vampire{" +
                "isThirsty=" + isThirsty + '\'' +
                "name=" + this.getName() +  '\'' +
                ", age=" + this.getAge() +
                ", DOB='" + this.getDOB() + '\'' +
                '}';
    }
}
