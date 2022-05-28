import java.util.Scanner;

public class YardGreening {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double area = Double.parseDouble(scan.nextLine());

        double price = area * 7.61;
        double discount = price * 0.18;
        double finalPrice = price - discount;

        System.out.printf("The final price is: %f lv.\n" +
                "The discount is: %f lv.\n", finalPrice, discount);
    }
}
