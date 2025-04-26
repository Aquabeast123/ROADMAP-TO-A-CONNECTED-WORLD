#include <iostream>
#include <string>
#include <iomanip> // for std::hex and std::setw
using namespace std;

string xorEncryptDecrypt(const string& text, const string& key) {
    string result;
    for (size_t i = 0; i < text.size(); ++i) {
        result += text[i] ^ key[i % key.length()];
    }
    return result;
}

int main() {
    string text, key;

    cout << "Enter text to encrypt: ";
    getline(cin, text);

    cout << "Enter key: ";
    getline(cin, key);

    string encrypted = xorEncryptDecrypt(text, key);

    cout << "Encrypted (hex): ";
    for (unsigned char c : encrypted)
        cout << hex << setw(2) << setfill('0') << (int)c;
    cout << endl;

    string decrypted = xorEncryptDecrypt(encrypted, key);
    cout << "Decrypted: " << decrypted << endl;

    return 0;
}