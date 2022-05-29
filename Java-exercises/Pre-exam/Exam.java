import java.util.Scanner;

public class Exam {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double students = Double.parseDouble(scan.nextLine());

        int vG = 0;
        int gD = 0;
        int aV = 0;
        int wK = 0;

        double total = 0.0;

        for (int i = 0; i < students; i++) {
            double grade = Double.parseDouble(scan.nextLine());
            total += grade;
            if (grade >= 5.0) vG++;
            else if (grade >= 4.0) gD++;
            else if (grade >= 3.0) aV++;
            else wK++;
        }

        double grvG = vG / students * 100;
        double grgD = gD / students * 100;
        double graV = aV / students * 100;
        double grwK = wK / students * 100;

        double average = total / students;

        System.out.printf("Top students: %.2f%%\n", grvG);
        System.out.printf("Between 4.00 and 4.99: %.2f%%\n", grgD);
        System.out.printf("Between 3.00 and 3.99: %.2f%%\n", graV);
        System.out.printf("Fail: %.2f%%\n", grwK);
        System.out.printf("Average: %.2f", average);
    }
}
