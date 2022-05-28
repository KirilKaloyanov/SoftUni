import java.util.Scanner;

public class TimeAnd15Minutes  {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int hour = Integer.parseInt(scan.nextLine());
        int minute = Integer.parseInt(scan.nextLine());

        int time = minute + hour * 60;

        time += 15;

        hour = time / 60;
        minute = time % 60;

        if (hour > 23) {
            hour = 0;
        }
        if (minute < 10) {
            System.out.printf("%d:0%d", hour, minute);
        } else {
            System.out.printf("%d:%d", hour, minute);
        }
    }
}
