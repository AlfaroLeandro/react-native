import { Contador, ContadorHook, LoginPagina } from "./components"
// import { BasicFunctions } from "./typescript"

interface Persona {
  fullname: string,
  edad: number,
  direccion?: {
    pais?: string,
    direccion?: number
  }
}

function App() {

  // const persona: Persona = {
  //   fullname: 'Leandro alfaro',
  //   edad: 23,
  //   direccion: {
  //     pais: 'argentina',
  //     direccion: 6675
  //   }
  // }


  return (
    <>
      <LoginPagina/>
    </>
  )
}

export default App
