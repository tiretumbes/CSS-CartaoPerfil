
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
      <h2>Maria Silva</h2>
      <p>Desenvolvedora Front-end apaixonada por React e CSS.</p>
      <button className="btn">Seguir</button>
    </div>
    </div>
  );
}