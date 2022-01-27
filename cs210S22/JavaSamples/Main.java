package Discussion1;

import stdlib.StdOut;

public class Main {

    public static void main(String[] args) {
       // Gets required info from user to generate a Person Object
        String name = args[0];
        double age = Double.parseDouble(args[1]);
        int monthOfBirth = Integer.parseInt(args[2]);
        int dayOfBirth = Integer.parseInt(args[3]);
        int yearOfBirth = Integer.parseInt(args[4]);

        // checks for valid age, if not - exception is thrown
        if(age < 0.0)
        {
            throw new IllegalArgumentException("Illegal age");
        }

        // Creates a stylized DOB string from dates
        String DOB = monthOfBirth + "/" + dayOfBirth + "/" + yearOfBirth;



        // Creates Person object p, using Person Class
        Person p = new Person(name, age , DOB);
        // Access methods of a class using className.methodName()
        System.out.println("AGE: " + p.getAge());

        /*
         * Inheritance
         */
        // Creates Vampire v, inheriting Person Class
        Vampire v = new Vampire("Sally", age, DOB, false);

        // Overloaded method that takes a Person as a parameter, also utilizing inheritance
        Vampire v2 = new Vampire(p, true);

        // prints the details of each object
        StdOut.println(p);
        StdOut.println(v);
        StdOut.println(v2);

        // change to object for demonstration purposes and prints it
        v2.setThirst(false);
        StdOut.println(v2);

        /*
         * Interfaces
         */
        Animal pig = new Animal("oink", false);
        pig.animalSound();
        pig.sleep();
        Animal platypus = new Animal("perry the platypus noise", true);

        if(platypus.laysEggs()) {
            System.out.println("Wow biology is weird");
        }

        /*
         * Generic Methods
         * - can take in any data type
         * ---- errors arise if the work done within the method is type specific
         *          -> Ex if for some reason your generic was supposed to add integer 1 to each element,
         *              and you passed an array of strings
         */
        Integer[] intArray = { 1, 2, 3, 4, 5 };
        Double[] doubleArray = { 1.1, 2.2, 3.3, 4.4 };
        Character[] charArray = { 'H', 'E', 'L', 'L', 'O' };
        printArray(intArray);
        printArray(doubleArray);
        printArray(charArray);


        /*
         * Generic Classes
         * - work with any given data type
         */
           // the type is in the < >
        Box<Integer> integerBox = new Box<Integer>();
        Box<String> stringBox = new Box<String>();

        integerBox.add(10);
        stringBox.add(new String("Hello World"));

        System.out.printf("Integer Value :%d\n\n", integerBox.get());
        System.out.printf("String Value :%s\n", stringBox.get());
    }




    // Takes an unknown type, so long as it is an array
    public static <X> void printArray( X[] inputArray ) {
        // for each element in the input array, print it
        for(X element : inputArray) {
            System.out.printf("%s ", element);
        }
        System.out.println();
    }


}
