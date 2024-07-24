import java.util.Scanner;

public class ContaTerminal {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Bem vindo ao Banco DIO");
        System.out.println("Por favor, digite o seu nome!");
        String nomeCliente = sc.nextLine();
        System.out.println("Por favor, digite o número da Conta!");
        int contaNumero = sc.nextInt();
        sc.nextLine();
        System.out.println("Por favor, digite o número da Agência!");
        String agencia = sc.nextLine();

        System.out.println("Digite o valor do seu Saldo!");
        double saldo = sc.nextDouble();

        System.out.printf("Olá %s, Obrigado por criar uma conta" +
                " em nosso banco, sua agência é %s, conta %d, " +
                " e seu saldo é de %.2f já disponível para saque.",
                nomeCliente,agencia,contaNumero,saldo);

        sc.close();
    }
}