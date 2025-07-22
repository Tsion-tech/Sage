#include <iostream>
using namespace std;

char board[3][3];
char currentPlayer = 'X';

void initializeBoard() {
    char box = '1';
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            board[i][j] = box++;
        }
    }
}

void displayBoard() {
    cout << "\n";
  
    for (int i = 0; i < 3; i++) {
    	
        cout<<"*---*---*---*\n";
        for (int j = 0; j < 3; j++) {
            cout << "| " << board[i][j] << " ";
        }
        cout << "|\n";
    }
    cout << "*---*---*---*\n";
}

bool checkWin() {
    for (int i = 0; i < 3; i++) {
        if ((board[i][0] == currentPlayer &&
             board[i][1] == currentPlayer &&
             board[i][2] == currentPlayer) ||
            (board[0][i] == currentPlayer &&
             board[1][i] == currentPlayer &&
             board[2][i] == currentPlayer))
            return true;
    }
    if ((board[0][0] == currentPlayer &&
         board[1][1] == currentPlayer &&
         board[2][2] == currentPlayer) ||
        (board[0][2] == currentPlayer &&
         board[1][1] == currentPlayer &&
         board[2][0] == currentPlayer))
        return true;

    return false;
}

bool checkDraw() {
    for (int i = 0; i < 3; i++)
        for (int j = 0; j < 3; j++)
            if (board[i][j] != 'X' && board[i][j] != 'O')
                return false;
    return true;
}

void  switchPlayer(){
	
	if(currentPlayer =='x'){
		
		currentPlayer ='0';
	}else {
		currentPlayer='x';
	}
	
}


void makeMove() {
    int move;
    cout << "\nPlayer " << currentPlayer << ", enter a number (1-9): ";
    cin >> move;

    int row = (move - 1) / 3;
    int col = (move - 1) % 3;

    if (move < 1||  move > 9 || board[row][col] == 'X' || board[row][col] == 'O') {
        cout << "Invalid move. Try again.\n";
        makeMove();
    } else {
        board[row][col] = currentPlayer;
    }
}

int main() {
    initializeBoard();

    while (true) {
        displayBoard();
        makeMove();

        if (checkWin()) {
            displayBoard();
            cout << "\nPlayer " << currentPlayer << " wins!\n";
            break;
        }

        if (checkDraw()) {
            displayBoard();
            cout << "\nLose!\n";
            break;
        }

        switchPlayer();
    }

    return 0;
}