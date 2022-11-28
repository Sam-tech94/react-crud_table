import React, { useState } from "react";
import Modal from "../modal/Modal";

const ReadOnlyRow = ({ contact, index, handleEditClick, handleDeleteClick }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button
                    className="addBtn"
                    onClick={(event) => handleEditClick(event, contact)}>Edit</button>
            </td>
            <td>
                <button className="addBtn delete" onClick={() => setIsOpen(true)}>Delete</button>
                {
                    isOpen && <Modal open={isOpen} handleDeleteClick={handleDeleteClick} setIsOpen={setIsOpen}>
<<<<<<< HEAD
                        Are you sure you want to delete it?
                    </Modal>
=======
                            Are you sure you want to delete it?
                        </Modal>
>>>>>>> 9071b52badcdffff41a00cdbb652868cabe44890
                }
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
