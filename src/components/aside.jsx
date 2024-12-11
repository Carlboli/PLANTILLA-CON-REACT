import chef from "../assets/chef.png"

export default function Aside() {
  return (
    <div className="col-sm-4">
      <h2>Sobre Mí</h2>
      <h5>EL Maestro Canabico:</h5>
      <div className="fakeimg">
        <img src={chef} width="100%"/>
      </div>
      <p>Expertos en cocina canabica, Los mejores Brownies...</p>
      <h3 className="mt-4">Categorias</h3>
      <p>Recetas Especiales.</p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Brownies con CBD</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Té con THC</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Morcilla con THC + CBD</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">ChocoHappy</a>
        </li>
      </ul>
      <hr className="d-sm-none"/>
    </div>
  )
}
