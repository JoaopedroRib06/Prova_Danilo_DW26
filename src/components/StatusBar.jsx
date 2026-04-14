function StatusBar({ mensagem }) {
    return (
      <header style={{ background: "#282c34", color: "#fff", padding: "10px" }}>
        <h2>{mensagem}</h2>
      </header>
    );
  }
  
  export default StatusBar;