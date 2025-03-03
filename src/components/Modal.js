import "../styles/Modal.scss";
import closeBtn from "../icons/x-circle.svg";

function Modal({ modalObj, onShowBtn }) {
  if (modalObj === undefined) return;

  const { title, para, services } = modalObj;

  return (
    <div className="modal__container">
      <div className="modal__box">
        <div className="close__btn" onClick={() => onShowBtn()}>
          <img src={closeBtn} alt="close-btn"></img>
        </div>

        <div className="modal__content">
          <h3>{title}</h3>
          <p>{para}</p>
          <ul>
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
