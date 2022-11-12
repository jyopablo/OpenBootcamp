public class Main {
    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        cliente.edad = "22 años";
        cliente.nombre = "Juan Leal";
        cliente.telefono = "502+ 3375-0016";
        cliente.credito = 15000;
        Trabajador trabajador = new Trabajador();
        trabajador.edad = "25 años";
        trabajador.nombre = "Pablo Gonzalez";
        trabajador.telefono = "502+ 5491-6569";
        trabajador.salario = 100000;
        System.out.println("________Datos del cliente__________");
        System.out.println("Edad: " + cliente.edad);
        System.out.println("Nombre: " + cliente.nombre);
        System.out.println("Telefono: " + cliente.telefono);
        System.out.println("Credito: " + cliente.credito);
        System.out.println("___________Datos del trabajador___________");
        System.out.println("Edad: " + trabajador.edad);
        System.out.println("Nombre: " +trabajador.nombre);
        System.out.println("Telefono: " + trabajador.telefono);
        System.out.println("Salario: " + trabajador.salario);
    }
}

class Persona{
    String edad = "";
    String nombre = "";
    String telefono = "";
}

class Cliente extends  Persona{
    int credito = 0;
}

class  Trabajador extends  Persona{
    int salario = 0;
}