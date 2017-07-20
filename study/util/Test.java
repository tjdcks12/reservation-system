import java.util.HashSet;
import java.util.LinkedList;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Test {
    public static void main(String[] argv) {
        Inflector f = new Inflector();
        System.out.println(f.ordinalize(1));
        System.out.println(f.ordinalize(2));
        System.out.println(f.ordinalize(3));
        System.out.println(f.ordinalize(10));
        System.out.println(f.ordinalize(12));
        System.out.println(f.pluralize("word"));
        System.out.println(f.pluralize("child"));
        System.out.println(f.pluralize("category"));
        System.out.println(f.singularize("categories"));
        System.out.println(f.singularize("children"));
        System.out.println(f.singularize("words"));
        System.out.println(f.camelCase("hello_world", false, '_')); // helloWorld
        System.out.println(f.camelCase("hello_world", true, '_')); // HelloWorld
        System.out.println(f.underscore("helloWorld", '_')); // hello_world
    }
}