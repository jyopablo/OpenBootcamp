public class Main {
    public static void main(String[] args) {
        //condition();
        //bucleWhile();
        //bucleDoWhile();
        //bucleFor();
        //Switch();
    }

    public static void condition(){
        int numerolf=-100;
        if(numerolf>0){
            System.out.println("EL numero es positivio");
        }else if(numerolf<0){
            System.out.println("El numero es negativo");
        }else{
            System.out.println("El numero es 0");
        }
    }

    public static void bucleWhile(){
        int numeroWhile=0;
        while (numeroWhile<3){
            System.out.println("La variable numerWhile es: "+numeroWhile);
            numeroWhile++;
        }
    }

    public static void bucleDoWhile(){
        int numeroDoWhile=3;
        do {
            System.out.println("La variable numeroDoWhile es: "+numeroDoWhile);
            numeroDoWhile++;
        }while(numeroDoWhile<3);
    }

    public static void bucleFor(){
        for(int numeroFor=0;numeroFor<=3;numeroFor++){
            System.out.println("La variable de i es: "+numeroFor);
        }
    }

    public static void Switch(){
        int estacion=1;
        switch (estacion){
            case 1->{
                System.out.println("Invierno");
            }
            case 2->{
                System.out.println("Verano");
            }case 3->{
                System.out.println("Otoño");
            }
            case 4 ->{
                System.out.println("Primavera");
            }
            default->{
                    System.out.println("No se a seleccionado ni una estacion");
            }

        }
    }



}