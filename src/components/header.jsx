import logo from "../assets/LogoCocina.png"
export default function Header() {
  return (
    
    <div className="p-5 bg-success text-white text-center">  
      <h1> <img src={logo} width="80px"></img> Recetas Pan Gola</h1>
      <p>Hierba mala nunca muere ☘</p>
    </div>
  );
}
