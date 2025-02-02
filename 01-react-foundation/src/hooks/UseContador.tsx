import { useState } from "react";

interface Opciones {
    valorInicial: number
}
 
export const UseContador = (opciones: Opciones) => {
    
    const [contador, setContador] = useState(opciones.valorInicial)

    const incrementar = (value: number) => {
        setContador(contador + value);
    }
    
    return {
        //propiedades
        contador, 
        //metodos
        incrementar
    }
}