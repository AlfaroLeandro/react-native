import { useAuthStore } from "../store/auth.store"

export const LoginPagina = () => {
    const authStatus = useAuthStore( estado => estado.status)

    if( authStatus === 'chequeando')
        return <h3> cargando </h3>

    return (
        <div>
            <h3>Login pagina</h3>
            <h4> { authStatus } </h4>
        </div>
    )
}