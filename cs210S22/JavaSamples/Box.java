package Discussion1;


/* GENERICS!
 * Code from https://www.tutorialspoint.com/java/java_generics.htm
 * Generic Classes allow you to build a class with a data type of your choosing
 */



public class Box<T> {
    // instance variable
    private T t;

    public void add(T t) {

        this.t = t;
    }

    public T get() {
        return t;
    }

    public static void main(String[] args) {
        Box<Integer> integerBox = new Box<Integer>();
        Box<String> stringBox = new Box<String>();

        integerBox.add(10);
        stringBox.add(new String("Hello World"));

        System.out.printf("Integer Value :%d\n\n", integerBox.get());
        System.out.printf("String Value :%s\n", stringBox.get());
    }
}