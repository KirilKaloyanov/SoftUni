        import java.util.Scanner;

        public class LunchBreak {
            public static void main(String[] args) {
                Scanner scan = new Scanner(System.in);

                String name = scan.nextLine();
                int length = Integer.parseInt(scan.nextLine());
                int breakTime = Integer.parseInt(scan.nextLine());

                double lunchTime = breakTime * 0.125;
                double restTime = breakTime * 0.25;
                double remainder = breakTime - lunchTime - restTime;
                double diff = remainder - length;

                if (diff >= 0) {
                    System.out.printf("You have enough time to watch %s and left with %.0f minutes free time.", name, Math.ceil(diff));
                } else {
                    diff = Math.abs(diff);
                    System.out.printf("You don't have enough time to watch %s, you need %.0f more minutes.", name, Math.ceil(diff));
                }
            }
        }
