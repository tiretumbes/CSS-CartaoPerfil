
import "./App.css";

export default function App() {
  return (

    <div className="container">
    <div className="card">
      <div className="img-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4792/4792950.png"
        alt="Foto de perfil"
        className="profile-img"
        width="150px"
      />
      </div>
      <h1>Maria Silva</h1>
      <p> <br />Desenvolvedora Front-end apaixonada <br /> por React e CSS.</p>
      <button className="btn">Seguir</button>
    </div>
    </div>
  );
}