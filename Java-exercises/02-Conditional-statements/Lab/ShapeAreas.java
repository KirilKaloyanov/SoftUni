import java.util.Scanner;

public class ShapeAreas {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String shape = scan.nextLine();
        double area = 0;

        if (shape.equals("square")) {
            double side = Double.parseDouble(scan.nextLine());
            area = side * side;
        } else if (shape.equals("rectangle")) {
            double a = Double.parseDouble(scan.nextLine());
            double b = Double.parseDouble(scan.nextLine());

            area = a * b;
        } else if (shape.equals("circle")) {
            double r = Double.parseDouble(scan.nextLine());

            area = r * r * Math.PI;
        } else if (shape.equals("triangle")) {
            double a = Double.parseDouble(scan.nextLine());
            double b = Double.parseDouble(scan.nextLine());

            area = a * b / 2;
        }
        System.out.printf("%.3f", area);
    }

}
