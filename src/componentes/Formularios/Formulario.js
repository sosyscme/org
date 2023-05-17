import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
const Formulario = (props) => {
    const [nombre,actualizarNombre]= useState("")
    const [puesto,actualizarPuesto]= useState("")
    const [foto,actualizarFoto]= useState("")
    const [equipo,actualizarEquipo]=useState("")

    const[titulo,actualizarTitulo] =useState("")
    const[color,actualizarColor]=useState("")

    const {registrarColaborador,crearEquipo}=props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        let datosEnviar ={
            nombre,
            puesto,
            foto,
            equipo 
        }
        registrarColaborador(datosEnviar)
    }
    const manejarNuevoEquipo=(e)=>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
    }
    
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingrese nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de Foto" required valor={foto} actualizarValor={actualizarFoto}/>
            <ListaOpciones 
            valor={equipo}
             actualizarEquipo={actualizarEquipo}
             equipos={props.equipos}
             />
            <Boton texto ="Crear colaborador"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingrese titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="ingresar el color en HEx" required valor={color} actualizarValor={actualizarColor} type="color"/>  
            <Boton texto="Registrar Equipo"/>       
    </form>
    </section>
}

export default Formulario 