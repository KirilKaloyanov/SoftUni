import java.util.Scanner;

public class Repainting {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int nylon = Integer.parseInt(scan.nextLine());
        int paint = Integer.parseInt(scan.nextLine());
        int liquid = Integer.parseInt(scan.nextLine());
        int hours = Integer.parseInt(scan.nextLine());

        double priceNylon = (nylon + 2) * 1.5;
        double pricePaint = paint * 1.1 * 14.5;
        double priceLiquid = liquid * 5;

        double materialsPrice = priceLiquid + priceNylon + pricePaint + 0.4;
        double workforcePrice = hours * materialsPrice * 0.3;

        double finalPrice = materialsPrice + workforcePrice;

        System.out.println(finalPrice);
    }
}
