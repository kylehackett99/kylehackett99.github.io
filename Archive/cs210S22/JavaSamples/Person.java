package Discussion1;

// Class
public class Person {

    // Instance Variables
    private String name;
    private double age;
    private String DOB;

    // Constructor - takes in parameters and assignes inputs to the appropriate instance variables
    public Person(String name, double age, String DOB){
        this.name = name;
        this.age = age;
        this.DOB = DOB;
    }

    // "Getters" - retrieves the value assigned to an instance variable
    public String getName() {
        return name;
    }

    public double getAge() {
        return age;
    }

    public String getDOB() {
        return DOB;
    }

    // "Setters" - change the value assigned to an instance variable
    public void setAge(double newAge){
        this.age = newAge;
    }

    // returns string representation of object - good for debugging and verification
    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", DOB='" + DOB + '\'' +
                '}';
    }
}
