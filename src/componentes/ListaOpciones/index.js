import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    const manejarCambios= (e)=>{
        props.actualizarEquipo(e.target.value)
    }
    return <div className="listaOpciones">
        <label>Equipos</label> 
            <select value={props.valor} onChange={manejarCambios}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
               {props.equipos.map( (equipo,index) =>
                 <option key={index}>{equipo}</option>
               )}
            </select>
        
    </div> 
}
 
export  default ListaOpciones;
