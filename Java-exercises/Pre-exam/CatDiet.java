import java.util.Scanner;

public class CatDiet {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double fat = Double.parseDouble(scan.nextLine());
        double protein = Double.parseDouble(scan.nextLine());
        double carbs = Double.parseDouble(scan.nextLine());

        double initCal = Double.parseDouble(scan.nextLine());
        double water = Double.parseDouble(scan.nextLine());

        double wFat = fat / 100 * initCal / 9;
        double wProtein = protein / 100 * initCal / 4;
        double wCarbs = carbs / 100 * initCal / 4;

        double weight = wFat + wProtein + wCarbs;

        double calPerGram = initCal / weight;

        double result = (100 - water) / 100 * calPerGram;

        System.out.printf("%.4f", result);

    }
}
