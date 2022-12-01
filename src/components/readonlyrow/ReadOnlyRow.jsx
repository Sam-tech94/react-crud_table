import React, { useState } from "react";
import Modal from "../modal/Modal";

const ReadOnlyRow = ({
  item, 
  index, 
  handleEditClick, 
  handleCancelClick, 
  handleRemoveClick
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td data-column="Fullname">{item.fullName}</td>
        <td data-column="Address">{item.address}</td>
        <td data-column="Phonenumber">{item.phoneNumber}</td>
        <td data-column="Email">{item.email}</td>
        <td data-column="Edit">
          <button className="button__edit" onClick={() => handleEditClick(item, index)}>Edit</button>
        </td>
        <td data-column="Cancel">
          <button onClick={handleCancelClick}>Cancel</button>
        </td>
        <td data-column="Delete">
          <button onClick={() => setIsOpen(true)}>Delete</button>
          <Modal  handleRemoveClick={() => handleRemoveClick(item)} open={isOpen} setIsOpen={setIsOpen}>
            Are you sure you want to delete it ?
          </Modal>
        </td>
      </tr>
    </>
  )
}

export default ReadOnlyRow;