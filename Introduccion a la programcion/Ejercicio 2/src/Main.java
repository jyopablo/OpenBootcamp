public class Main {
    public static void main(String[] args) {

        Persona persona1 = new Persona();

        persona1.setEdad(22);
        persona1.setNombre("Juan Pablo Gonzalez Leal");
        persona1.setTelefono("+502 3375 0016");


        System.out.println("Datos de la persona 1");
        System.out.println("Edad: "+persona1.getEdad());
        System.out.println("Nombre: "+persona1.getNombre());
        System.out.println("Telefono: "+persona1.getTelefono());
    }

    public static class Persona{

        private int edad;
        private  String nombre;
        private  String telefono;

        public int getEdad() {
            return edad;
        }

        public void setEdad(int edad) {
            this.edad = edad;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getTelefono() {
            return telefono;
        }

        public void setTelefono(String telefono) {
            this.telefono = telefono;
        }


    }
}