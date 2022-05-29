import java.util.Scanner;

public class MaidenParty {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double targetMoney = Double.parseDouble(scan.nextLine());
        double message = Double.parseDouble(scan.nextLine());
        double rose = Double.parseDouble(scan.nextLine());
        double key = Double.parseDouble(scan.nextLine());
        double cartoon = Double.parseDouble(scan.nextLine());
        double surprise = Double.parseDouble(scan.nextLine());

        double amount = message * 0.6 + rose * 7.2 + key * 3.6 + cartoon * 18.2 + surprise * 22;
        double count = message + rose + key + cartoon + surprise;

        double discount = 0;

        if (count >= 25) discount = 0.35 * amount;
        amount -= discount;

        double profit = amount - 0.1 * amount;

        double diff = profit - targetMoney;

        if (diff >= 0) {
            System.out.printf("Yes! %.2f lv left.", diff);
        } else {
            diff = Math.abs(diff);
            System.out.printf("Not enough money! %.2f lv needed.", diff);
        }

    }
}
