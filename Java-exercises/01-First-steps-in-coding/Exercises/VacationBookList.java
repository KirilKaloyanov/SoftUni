import java.util.Scanner;

public class VacationBookList {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int totalPages = Integer.parseInt(scan.nextLine());
        int pagesPerHour = Integer.parseInt(scan.nextLine());
        int days = Integer.parseInt(scan.nextLine());

        int totalHours = totalPages / pagesPerHour;
        int result = totalHours / days;

        System.out.println(result);
    }
}
