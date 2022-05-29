import java.util.Scanner;

public class MultiTable {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String number = scan.nextLine();
        char first = number.charAt(2);
        char second = number.charAt(1);
        char third = number.charAt(0);

        int a = Integer.parseInt(String.valueOf(first));
        int b = Integer.parseInt(String.valueOf(second));
        int c = Integer.parseInt(String.valueOf(third));

        for (int i = 1; i <= a; i++) {
            for (int j = 1; j <= b; j++) {
                for (int k = 1; k <= c; k++) {
                    int total = i * j * k;
                    System.out.printf("%d * %d * %d = %d;\n", i, j, k, total);
                }

            }
        }
    }
}
