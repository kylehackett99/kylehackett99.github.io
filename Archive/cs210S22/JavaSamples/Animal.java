package Discussion1;

// Interface - provides empty methods to a class
interface Mammal {
    // Empty methods - supposed to be applicable to many different posisble classes
        // EX. You could have a class called Mouse that youd want to have access to these methods and be customizable
    public void animalSound(); // interface method (does not have a body)
    public void sleep();
    public boolean laysEggs();
}

// really dumb interface but is an example for multi interface
interface  Alive {
    public boolean isBreathing();
}

// Animal class
    // implements means it is using that specific interface
public class Animal implements Mammal , Alive {
    private String noise;
    private boolean canLayEggs;

    // Animal Constructor
    public Animal (String noise, boolean canLayEggs){
        this.noise = noise;
        this.canLayEggs = canLayEggs;
    }

    // Mammal Interface Methods
    public void animalSound() {
       System.out.println(noise);
    }

    public boolean laysEggs() {
        return canLayEggs;
    }

    public void sleep() {
        System.out.println(noise + " zZzZzZ");
        System.out.println(noise + " zZz");
    }

    // Alive interface Method
    public boolean isBreathing() {
        return true;
    }
}
