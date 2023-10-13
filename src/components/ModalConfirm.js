import {Modal, Button} from 'react-bootstrap';
import { deleteUser } from '../Services/UserService';
import {toast} from 'react-toastify'

const ModalConfirm = (props) => {
    const {show, handleClose, dataUserDelete, handleDeleteUserFromModal} = props;

    const confirmDelete = async () => {
        let res = await deleteUser(dataUserDelete.id);
        if (res ) {
            toast.success("deleted successfully");
            handleClose();
            handleDeleteUserFromModal(dataUserDelete);
        } else {
            toast.error("failed to delete");
        }
        
    }
   

    return (
        <>
            <Modal 
                show={show} 
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Delete A User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                       <p> Are you sure to delete this user, this action can't be undone!</p>
                       

                        Do you want to delete this user?<br/> <b>email = "{dataUserDelete.email}"</b>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => confirmDelete()}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
        
        
        </>
    )
}

export default ModalConfirm