import { useState } from "react"

export const Contador = () => {

    const [contador, setContador] = useState(10)

    const incrementar = (value: number) => {
        setContador(contador + value);
    }

    return (
        <>
            <h3>
                Contador <small>{ contador }</small>
            </h3>

            <div>
                <button onClick={ () => incrementar(1)}>+1</button>
                <button onClick={ () => incrementar(-1)}>-1</button>
            </div>
        </>
    )
}