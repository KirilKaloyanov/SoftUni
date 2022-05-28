import java.util.Scanner;

public class SuppliesForSchool {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int pens = Integer.parseInt(scan.nextLine());
        int markers = Integer.parseInt(scan.nextLine());
        int liquid = Integer.parseInt(scan.nextLine());

        double pricePens = pens * 5.80;
        double priceMarkers = markers * 7.2;
        double priceLiquid = liquid * 1.2;

        double totalPrice = priceLiquid + priceMarkers + pricePens;
        double discount = totalPrice * 0.25;
        double finalPrice = totalPrice - discount;

        System.out.println(finalPrice);
    }
}
