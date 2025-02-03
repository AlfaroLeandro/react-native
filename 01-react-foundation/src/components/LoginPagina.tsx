import { useEffect } from "react"
import { useAuthStore } from "../store/auth.store"

export const LoginPagina = () => {
    const authStatus = useAuthStore( estado => estado.status)
    const usuario = useAuthStore( estado => estado.usuario)
    const login = useAuthStore( estado => estado.login)
    const logout = useAuthStore( estado => estado.logout)

    useEffect(() => {
        setTimeout(() => {
            // login("asd", "123")
            logout()
        }, 1500);
    }, [])

    if( authStatus === 'chequeando')
        return <h3> cargando </h3>

    return (
        <div>
            <h3>Login pagina</h3>
            <h4> { 
            (authStatus == 'autorizado')
                ? <div> {JSON.stringify(usuario)}</div>  
                : <div>AAAAAAAAAAAAAAAAAAAAAAAAANo autenticado</div>  
            } </h4>

            {
            (authStatus == 'autorizado')
                ? (<button onClick={ () => logout }>Logout</button>)
                : (<button onClick={ () => login("asd", "123") }>login</button>)
            } 
        </div>
        
    )
}