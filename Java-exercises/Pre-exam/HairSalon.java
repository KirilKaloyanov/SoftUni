import java.util.Scanner;

public class HairSalon {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int target = Integer.parseInt(scan.nextLine());
        int income = 0;

        String command = scan.nextLine();

        while (!command.equals("closed")) {
            if (command.equals("haircut")) {
                String haircutType = scan.nextLine();
                if (haircutType.equals("mens")){
                    income += 15;
                } else if (haircutType.equals("ladies")) {
                    income += 20;
                } else if (haircutType.equals("kids")){
                    income += 10;
                }
            } else if (command.equals("color")) {
                String colorType = scan.nextLine();
                if (colorType.equals("touch up")) {
                    income += 20;
                } else if (colorType.equals("full color")) {
                    income += 30;
                }
            }
            if (income >= target) break;
            command = scan.nextLine();

        }
        int diff = target - income;
        if (diff > 0) {
            System.out.printf("Target not reached! You need %dlv. more.\n", diff);
            System.out.printf("Earned money: %dlv.", income);
        } else {
            System.out.println("You have reached your target for the day!");
            System.out.printf("Earned money: %dlv.", income);

        }
    }
}
