import java.security.*;
import javax.crypto.Cipher;
import java.util.Base64;

public class RSA {

    private static KeyPair keyPair;

    public static void generateKeys() throws NoSuchAlgorithmException {
        KeyPairGenerator generator = KeyPairGenerator.getInstance("RSA");
        generator.initialize(2048);
        keyPair = generator.generateKeyPair();
        System.out.println("RSA Key Pair Generated Successfully!");
    }

    public static String encrypt(String message) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.ENCRYPT_MODE, keyPair.getPublic());
        byte[] encryptedBytes = cipher.doFinal(message.getBytes());
        return Base64.getEncoder().encodeToString(encryptedBytes);
    }

    public static String decrypt(String encryptedMessage) throws Exception {
        Cipher cipher = Cipher.getInstance("RSA");
        cipher.init(Cipher.DECRYPT_MODE, keyPair.getPrivate());
        byte[] decryptedBytes = cipher.doFinal(Base64.getDecoder().decode(encryptedMessage));
        return new String(decryptedBytes);
    }

    public static void main(String[] args) {
        try {
            generateKeys();

            String originalMessage = "This is a secret message!";
            System.out.println("Original Message: " + originalMessage);

            String encryptedMessage = encrypt(originalMessage);
            System.out.println("Encrypted Message: " + encryptedMessage);

            String decryptedMessage = decrypt(encryptedMessage);
            System.out.println("Decrypted Message: " + decryptedMessage);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
