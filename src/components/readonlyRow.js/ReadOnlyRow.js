import React from "react";

const ReadOnlyRow = ({ contact, index, handleEditClick, handleDeleteClick }) => {
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
                <button className="addBtn delete" onClick={() => handleDeleteClick(contact)}>Delete</button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;