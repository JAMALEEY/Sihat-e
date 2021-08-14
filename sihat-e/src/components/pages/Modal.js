import './modal.css';

 const Modal = ({ submit, handleClose, show, show2, children, modalTitle, mesures, date }) => {
  const showHideClassName = show || show2 ? "modal display-block" : "modal display-none";
const showButton = show2 ? 'Enregistrer' : "Modifier";
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
        <button onClick={submit} type="button" class="btn btn-success">{showButton}</button>
        
        <button type="button" class="btn btn-dark"  onClick={handleClose} data-dismiss="modal">Fermer</button>
      </div>


       
      </section>
    </div>
  );
};

export default Modal;

