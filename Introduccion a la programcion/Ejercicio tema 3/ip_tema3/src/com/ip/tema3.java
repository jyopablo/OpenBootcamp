package com.ip;

public class tema3 {

    public class coche{
        int door= 0;
        void add(){
            door++;
        }
    }

    public void suma(int a, int b, int c){
        int result;
        result = a + b + c;
        System.out.println("Resultado de la suma: "+result);
        coche door_ = new coche();
        door_.add();
        System.out.println("Numero de puertas: "+door_.door);
    }

    public static void main(String[] args) {
        tema3 tema3 = new tema3();
        tema3.suma(10,30,5);
    }
}
