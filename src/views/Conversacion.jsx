const Conversacion = () => {
  return (
    <article className="container_listas">
      <div>
        <h3>nombre-curso-graado-</h3>
      </div>
      <div>
        <Resivido />
        <Enviado />
      </div>
    </article>
  );
};

function Resivido() {
  return (
    <article>
      <div>img</div>
      <div>
        <p>nombre</p>
        <p>mensaje</p>
      </div>
    </article>
  );
}

function Enviado() {
  return (
    <article>
      <div>
        <p>yo</p>
        <p>mensaje</p>
      </div>
      <div>img</div>
    </article>
  );
}

export default Conversacion;
