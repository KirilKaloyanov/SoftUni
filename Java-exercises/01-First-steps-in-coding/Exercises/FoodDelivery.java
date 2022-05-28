import java.util.Scanner;

public class FoodDelivery {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int chicken = Integer.parseInt(scan.nextLine());
        int fish = Integer.parseInt(scan.nextLine());
        int veg = Integer.parseInt(scan.nextLine());

        double chickenPrice = chicken * 10.35;
        double fishPrice = fish * 12.4;
        double vegPrice = veg * 8.15;

        double foodPrice = chickenPrice + fishPrice + vegPrice;
        double dessertPrice = foodPrice * 0.2;
        double totalPrice = 2.5 + foodPrice + dessertPrice;

        System.out.println(totalPrice);
    }
}
