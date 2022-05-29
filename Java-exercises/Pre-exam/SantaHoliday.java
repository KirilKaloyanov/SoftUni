import java.util.Scanner;

public class SantaHoliday {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int stay = Integer.parseInt(scan.nextLine());
        String housing = scan.nextLine();
        String feedback = scan.nextLine();

        int overnights = stay - 1;

        double price = 0;

        if (housing.equals("room for one person")) {
            price = overnights * 18;
        } else if (housing.equals("apartment")) {
            price = overnights * 25;
        } else if (housing.equals("president apartment")) {
            price = overnights * 35;
        }

        if (stay < 10) {
            if (housing.equals("apartment")) {
                price -= price * 0.3;
            } else if (housing.equals("president apartment")) {
                price -= price * 0.1;
            }
        } else if (stay > 15) {
            if (housing.equals("apartment")) {
                price -= price * 0.5;
            } else if (housing.equals("president apartment")) {
                price -= price * 0.2;
            }
        } else {
            if (housing.equals("apartment")) {
                price -= price * 0.35;
            } else if (housing.equals("president apartment")) {
                price -= price * 0.15;
            }
        }

        if (feedback.equals("positive")) {
            price += price * 0.25;
        } else {
            price -= price * 0.1;
        }
        System.out.printf("%.2f", price);
    }
}
