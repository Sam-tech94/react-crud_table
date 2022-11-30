import React from "react";

const ReadOnlyRow = ({
  item, 
  index, 
  handleEditCLick, 
  handleCancelClick, 
  handleRemoveClick
}) => {
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td data-column={item.name}>{item.fullName}</td>
        <td>{item.address}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.email}</td>
        <td data-column="Edit">
          <button className="button__edit" onClick={handleEditCLick}>Edit</button>
        </td>
        <td data-column="Cancel">
          <button onClick={handleCancelClick}>Cancel</button>
        </td>
        <td data-column="Delete">
          <button onClick={() => handleRemoveClick(item)}>Delete</button>
        </td>
      </tr>
    </>
  )
}

export default ReadOnlyRow;