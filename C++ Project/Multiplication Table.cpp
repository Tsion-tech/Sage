#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    const int size = 12;

    // Calculate max width for the biggest number (12x12 = 144)
    const int cellWidth = 4;


    cout << "*";
    for (int i = 0; i <= size; i++) {
        for (int j = 0; j < cellWidth; j++) cout << "-";
        cout << "*";
    }
    cout << "\n";

    //  row (0 to 12)
    cout << "|";
    cout << setw(cellWidth) << " ";
    cout << "|";
    for (int i = 1; i <= size; i++) {
        cout << setw(cellWidth) << i << "|";
    }
    cout << "\n";

    // Head separator line
    cout << "*";
    for (int i = 0; i <= size; i++) {
        for (int j = 0; j < cellWidth; j++) cout << "-";
        cout << "*";
    }
    cout << "\n";

    // Table body
    for (int row = 1; row <= size; row++) {
        // Start of each row
        cout << "|";
        cout << setw(cellWidth) << row << "|";

        for (int col = 1; col <= size; col++) {
            cout << setw(cellWidth) << row * col << "|";
        }
        cout << "\n";

        // Bottom line after each row
        cout << "*";
        for (int i = 0; i <= size; i++) {
            for (int j = 0; j < cellWidth; j++) cout << "-";
            cout << "*";
        }
        cout << "\n";
    }

    return 0;
}