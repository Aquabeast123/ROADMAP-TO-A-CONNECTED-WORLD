import java.util.Scanner;

public class TicTacToe {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Board board = new Board(3);

        char currentPlayer = 'X';

        while (true) {
            board.printBoard();
            System.out.println("Player " + currentPlayer + "'s turn. Enter row and column (0, 1, or 2):");
            int row = sc.nextInt();
            int col = sc.nextInt();

            if (row < 0 || row > 2 || col < 0 || col > 2) {
                System.out.println("Invalid input. Try again.");
                continue;
            }

            if (!board.placeMove(row, col, currentPlayer)) {
                System.out.println("Cell already occupied! Try again.");
                continue;
            }

            if (board.checkWin(currentPlayer)) {
                board.printBoard();
                System.out.println("Player " + currentPlayer + " wins!");
                break;
            }

            if (board.isFull()) {
                board.printBoard();
                System.out.println("It's a Draw!");
                break;
            }

            currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
        }

        sc.close();
    }
}
