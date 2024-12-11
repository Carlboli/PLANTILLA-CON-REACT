import Articles from "./articles";
import datos from "../../public/datos.json";
import datos2 from "../../public/datos2.json";

export default function Content() {
  let recetas = "Brownie + THC";
  let { Pastas, Postres, Ensaladas } = datos;
  return (
    <div className="col-sm-8">
      {Ensaladas.map((receta, i) => (
        <Articles key={i} recipes={receta} />
      ))}
    </div>
  );
}
