import './modal.css';
import {editTaille} from '../../actions'
 const ModalUpdate = ({  edit, handleClose, show2, children, modalTitle, mesures, date }) => {
    const showHideClassName = show2  ? "modal display-block" : "modal display-none";

// submit = () => {
// alert('hi')
// }
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
        <button onClick={edit} type="button" class="btn btn-success">Modifier</button>
        
        <button type="button" class="btn btn-dark"  onClick={handleClose} data-dismiss="modal">Fermer</button>
      </div>


       
      </section>
    </div>
  );
};

export default ModalUpdate;

