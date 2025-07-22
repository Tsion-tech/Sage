#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    const int size = 12;
    const int cellWidth = 4;

    cout << "*";
    for (int i = 0; i <= size; i++) {
        for (int j = 0; j < cellWidth; j++) cout << "-";
        cout << "*";
    }
    cout << "\n";

    cout << "|";
    cout << setw(cellWidth) << " ";
    cout << "|";
    for (int i = 1; i <= size; i++) {
        cout << setw(cellWidth) << i << "|";
    }
    cout << "\n";

    cout << "*";
    for (int i = 0; i <= size; i++) {
        for (int j = 0; j < cellWidth; j++) cout << "-";
        cout << "*";
    }
    cout << "\n";

    for (int row = 1; row <= size; row++) {
    	
        cout << "|";
        cout << setw(cellWidth) << row << "|";

        for (int col = 1; col <= size; col++) {
            cout << setw(cellWidth) << row * col << "|";
        }
        cout << "\n";

        cout << "*";
        for (int i = 0; i <= size; i++) {
            for (int j = 0; j < cellWidth; j++) cout << "-";
            cout << "*";
        }
        cout << "\n";
    }

    return 0;
}