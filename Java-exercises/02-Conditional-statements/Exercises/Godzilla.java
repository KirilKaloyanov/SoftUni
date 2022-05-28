import java.util.Scanner;

public class Godzilla {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double budget = Double.parseDouble(scan.nextLine());
        int ppl = Integer.parseInt(scan.nextLine());
        double price = Double.parseDouble(scan.nextLine());

        double decor = budget * 0.1;
        double costumes = ppl * price;
        double discount = 0;
        if (ppl > 150) {
            discount = 0.1 * costumes;
        }
        double total = decor + costumes - discount;

        double diff = budget - total;

        if (diff >= 0) {
            System.out.println("Action!");
            System.out.printf("Wingard starts filming with %.2f leva left.", diff);
        } else {
            diff = Math.abs(diff);
            System.out.println("Not enough money!");
            System.out.printf("Wingard needs %.2f leva more.", diff);
        }


    }
}
