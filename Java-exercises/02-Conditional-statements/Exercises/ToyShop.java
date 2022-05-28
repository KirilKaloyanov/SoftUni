import java.util.Scanner;

public class ToyShop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double excursion = Double.parseDouble(scan.nextLine());
        int puzzle = Integer.parseInt(scan.nextLine());
        int doll = Integer.parseInt(scan.nextLine());
        int teddy = Integer.parseInt(scan.nextLine());
        int minion = Integer.parseInt(scan.nextLine());
        int truck = Integer.parseInt(scan.nextLine());

        double amount = puzzle * 2.6 + doll * 3 + teddy * 4.1 + minion * 8.2 + truck * 2;
        int count = puzzle  + doll + teddy  + minion  + truck ;

        double discount = 0;
        if (count >= 50) {
            discount = amount * 0.25;
        }
        amount -= discount;
        amount -= amount * 0.1;
        double diff = amount - excursion;

        if (amount >= excursion) {
            System.out.printf("Yes! %.2f lv left.", diff);
        } else {
            diff = Math.abs(diff);
            System.out.printf("Not enough money! %.2f lv needed.", diff);
        }

    }
}
