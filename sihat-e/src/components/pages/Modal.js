import './modal.css';

 const Modal = ({ handleClose, show, children, modalTitle, mesures, date }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{modalTitle}</h5>
        </div>
    </div>
        

        <div class="modal-body">
        <p>
             {children}
        </p>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-success">Modifier</button>
        <button type="button" class="btn btn-dark"  onClick={handleClose} data-dismiss="modal">Fermer</button>
      </div>


       
      </section>
    </div>
  );
};

export default Modal;

