import { useState } from "react"
import { UseContador } from "../hooks"


export const ContadorHook = () => {

    const { contador, incrementar} = UseContador({valorInicial: 11});

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