import logo from "../img/paypal_logo.png";
import "./Modal.scss"

export function Modal({open,onClose}) {
  if (!open) return
  return (
    <section className="contenedor" onClick={onClose}>
      <div className="sub-contenedor" onClick={(e)=>{e.stopPropagation()}}>
        <div className="contenido">
          <div className="icon">
            <img src={logo} alt="" width={70} />
          </div>
          <div className="mensaje">
            <div className="title">
              <h3>Payment made successfully</h3>
              <div className="text">Thanks for choosing us</div>
            </div>
          </div>
        </div>
        <div className="actions">
          <button className="btn-descargar">Download</button>
          <button className="btn-volver" onClick={onClose}>Back</button>
        </div>
      </div>
    </section>
  );
}
