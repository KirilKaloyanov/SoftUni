import java.util.Scanner;

public class DepositCalculator {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double depositedAmount = Double.parseDouble(scan.nextLine());
        double numberOfMonths = Double.parseDouble(scan.nextLine());
        double annualInterestRate = Double.parseDouble(scan.nextLine());

        double totalInterest = annualInterestRate * depositedAmount / 100;
        double monthlyInterest = totalInterest / 12;
        double totalAmount = depositedAmount + numberOfMonths * monthlyInterest;

        System.out.println(totalAmount);

    }
}
