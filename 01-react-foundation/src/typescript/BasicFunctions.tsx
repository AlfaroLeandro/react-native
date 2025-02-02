
export const BasicFunctions = () => {
    const sumar = ( a: number, b: number): number => {
        return a + b;
    }
 
    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de sumar: { sumar(2, 8) } </span>
        </>
    )
}