#include <iostream>
#include <string>
using namespace std;

// Encrypts text using a Caesar cipher with given key
string caesarEncrypt(const string& text, int key) {
    string result = "";
    for (char c : text) {
        if (isupper(c))
            result += char((c - 'A' + key) % 26 + 'A');
        else if (islower(c))
            result += char((c - 'a' + key) % 26 + 'a');
        else
            result += c;
    }
    return result;
}

// Decrypts text using a Caesar cipher with given key
string caesarDecrypt(const string& text, int key) {
    string result = "";
    for (char c : text) {
        if (isupper(c))
            result += char((c - 'A' - key + 26) % 26 + 'A');
        else if (islower(c))
            result += char((c - 'a' - key + 26) % 26 + 'a');
        else
            result += c;
    }
    return result;
}

int main() {
    string plaintext = "Hello World";
    int key = 3;
    string ciphertext = caesarEncrypt(plaintext, key);
    cout << "Encrypted: " << ciphertext << endl;
    cout << "Decrypted: " << caesarDecrypt(ciphertext, key) << endl;
    return 0;
}