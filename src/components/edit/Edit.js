import React from "react";

const Edit = ({index, editFormData, handleEditFormChange, handleClickCancel}) => {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <input 
                    type="text"
                    placeholder="Enter a name..."
                    name="fullName"
                    required
                    value={editFormData.fullName}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="text"
                    placeholder="Enter an address..."
                    name="address"
                    required
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="number"
                    placeholder="Enter a phone number..."
                    name="phoneNumber"
                    required
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input 
                    type="email"
                    placeholder="Enter an email"
                    name="email"
                    required
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit" className="save">Save</button>
                <button type="button" className="cancel save" onClick={handleClickCancel}>Cancel</button>
            </td>
        </tr>
    );
};

export default Edit;