import java.util.ArrayList;

public class Board {
    private ArrayList<ArrayList<Character>> board;
    private int boardSize;

    public Board(int size) {
        this.boardSize = size;
        board = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            ArrayList<Character> row = new ArrayList<>();
            for (int j = 0; j < size; j++) {
                row.add('_');
            }
            board.add(row);
        }
    }

    public void printBoard() {
        for (ArrayList<Character> row : board) {
            for (Character cell : row) {
                System.out.print(cell + " ");
            }
            System.out.println();
        }
    }

    public boolean placeMove(int row, int col, char symbol) {
        if (board.get(row).get(col) == '_') {
            board.get(row).set(col, symbol);
            return true;
        }
        return false;
    }

    public boolean checkWin(char symbol) {
        // Rows and columns
        for (int i = 0; i < boardSize; i++) {
            if (checkRow(i, symbol) || checkColumn(i, symbol)) {
                return true;
            }
        }
        // Diagonals
        return checkDiagonals(symbol);
    }

    private boolean checkRow(int row, char symbol) {
        for (int col = 0; col < boardSize; col++) {
            if (board.get(row).get(col) != symbol) {
                return false;
            }
        }
        return true;
    }

    private boolean checkColumn(int col, char symbol) {
        for (int row = 0; row < boardSize; row++) {
            if (board.get(row).get(col) != symbol) {
                return false;
            }
        }
        return true;
    }

    private boolean checkDiagonals(char symbol) {
        boolean leftDiagonal = true;
        boolean rightDiagonal = true;

        for (int i = 0; i < boardSize; i++) {
            leftDiagonal &= (board.get(i).get(i) == symbol);
            rightDiagonal &= (board.get(i).get(boardSize - i - 1) == symbol);
        }

        return leftDiagonal || rightDiagonal;
    }

    public boolean isFull() {
        for (ArrayList<Character> row : board) {
            for (Character cell : row) {
                if (cell == '_') {
                    return false;
                }
            }
        }
        return true;
    }
} 