import java.util.Scanner;

public class FishTank {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int length = Integer.parseInt(scan.nextLine());
        int width = Integer.parseInt(scan.nextLine());
        int height = Integer.parseInt(scan.nextLine());
        double percentage = Double.parseDouble(scan.nextLine());

        int obem = length * width * height;
        double result = obem * (1 - percentage/100) / 1000;

        System.out.println(result);
    }
}
