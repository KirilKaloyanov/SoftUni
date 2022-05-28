import java.util.Scanner;

public class PetShop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double dogFood = Integer.parseInt(scan.nextLine());
        double catFood = Integer.parseInt(scan.nextLine());

        double sum = dogFood * 2.5 + catFood * 4;
        System.out.printf("%f lv.", sum);
    }
}
