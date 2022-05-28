import java.util.Scanner;

public class Shopping {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double budget = Double.parseDouble(scan.nextLine());
        int vid = Integer.parseInt(scan.nextLine());
        int pro = Integer.parseInt(scan.nextLine());
        int ram = Integer.parseInt(scan.nextLine());

        int priceVid = vid * 250;
        double pricePro = pro * 0.35 * priceVid;
        double priceRam = ram * 0.1 * priceVid;
        double sum = pricePro + priceRam + priceVid;

        if (vid > pro) {
            sum -= sum * 0.15;
        }

        double diff = budget - sum;

        if (diff >= 0) {
            System.out.printf("You have %.2f leva left!", diff);
        } else {
            diff = Math.abs(diff);
            System.out.printf("Not enough money! You need %.2f leva more!", diff);
        }
    }
}
