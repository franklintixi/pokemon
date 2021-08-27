import React from "React";

class Tarjeta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datosCargados: false, pokemones: [] };
  }

  cargarDatos() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.setState({ datosCargados: true, pokemones: datosRespuesta });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.cargarDatos();
  }
  render() {
    const { datosCargados, pokemones } = this.state;

    if (!datosCargados) {
      return <div> Cargando...</div>;
    } else {
      return (
        <div>
          {pokemones.map((pokemon) => (
            <div className="card">
              <img className="card-img-top" src="holder.js/100x180/" alt="" />
              <div className="card-body">
                <h4 className="card-title">{pokemon.name}</h4>
                <p className="card-text">Text</p>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Tarjeta;
