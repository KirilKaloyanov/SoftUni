import java.util.Scanner;

public class BasketballEquipment {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int tax = Integer.parseInt(scan.nextLine());

        double shoes = tax - 0.4 * tax;
        double equipment = shoes - 0.2 * shoes;
        double ball = equipment * 0.25;
        double accessories = ball * 0.2;

        double result = tax + shoes + equipment + ball + accessories;
        System.out.println(result);
    }
}
