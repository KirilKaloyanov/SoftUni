import java.util.Scanner;

public class SwimRecord {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double record = Double.parseDouble(scan.nextLine());
        double distance = Double.parseDouble(scan.nextLine());
        double timePerMeter = Double.parseDouble(scan.nextLine());

        double time = distance * timePerMeter;
        double tempo = distance / 15;
        double slowDown = Math.floor(tempo) * 12.5;

        time += slowDown;

        double diff = time - record;

        if ( diff >= 0 ) {
            System.out.printf("No, he failed! He was %.2f seconds slower.", diff);
        } else {
            System.out.printf("Yes, he succeeded! The new world record is %.2f seconds.", time);
        }
    }
}
