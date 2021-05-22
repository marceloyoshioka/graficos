import java.util.Arrays;

public class Fatorial
{
	public static void main(String[] args) {
		
		int input = 6;
		
		//int resultado = fatorial(input);
		int resultado =fatorialComReduce(input);
		System.out.println("Fatorial é "+resultado);
		
		
	}
	
	public static int fatorial(int numero){
	    if(numero == 0){
	        return 1;
	    }else{
	        int resultado = 1;
	        while(numero > 1){
	            resultado = resultado * numero;
	            //System.out.println(resultado+" - "+numero);
	            numero--; 
	        }
	        return numero;
	    }
	} 
	
	public static int fatorialComReduce(int numero){
	    int[] sequencia = new int[numero];
	    
	    //criei um array com os valores que serão multiplicados
	    for(int i = 0; numero > 0; i++){
	        sequencia[i] = numero;
	        //System.out.println(sequencia[i]);    
	        numero--;
	    }
	    //usei o reduce
	    int resultado = Arrays.stream(sequencia).reduce(1, (a,b) -> a*b);
	    return resultado;
	}
}











