import React, { Fragment, useState } from "react";
import data from "../../mock-data.json";
import Edit from "../edit/Edit";
import ReadOnlyRow from "../readonlyRow.js/ReadOnlyRow";
import "./Todos.css"

const Todos = () => {
	const [contacts, setContacts] = useState(data);
	const [addFormData, setAddFormData] = useState({
		fullName: "",
		address: "",
		phoneNumber: "",
		email: ""
	});

	const [editContactId, setEditContactId] = useState(null);
	const [editFormData, setEditFormData] = useState({
		fullName: "",
		address: "",
		phoneNumber: "",
		email: ""
	})

	const handleAddFormChange = (event) => {
		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = { ...addFormData };
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	const handleAddFormSubmit = (event) => {
		event.preventDefault();

		const newContact = {
			id: Math.floor(Math.random() * 10000),
			fullName: addFormData.fullName,
			address: addFormData.address,
			phoneNumber: addFormData.phoneNumber,
			email: addFormData.email
		}

		const newContacts = [...contacts, newContact];
		setContacts(newContacts)

		setAddFormData({
			fullName: "",
			address: "",
			phoneNumber: "",
			email: ""
		})
	};

	// edit

	const handleEditClick = (event, contact) => {
		event.preventDefault();
		setEditContactId(contact.id)

		const formValues = {
			fullName: contact.fullName,
			address: contact.address,
			phoneNumber: contact.phoneNumber,
			email: contact.email
		}

		setEditFormData(formValues)
	};


	const handleEditFormChange = (event) => {
		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = {...editFormData};
		newFormData[fieldName] = fieldValue;

		setEditFormData(newFormData);

	};


	const handleEditFormSubmit = (event) => {
		event.preventDefault();

		const editedContact = {
			fullName: editFormData.fullName,
			address: editFormData.address,
			phoneNumber: editFormData.phoneNumber,
			email: editFormData.email
		}

		const newContacts = [...contacts];

		const index = contacts.findIndex((contact) => contact.id === editContactId);

		newContacts[index] = editedContact;

		setContacts(newContacts)
		setEditContactId(null)
	}

	const handleClickCancel = () => {
		setEditContactId(null)
	}

	const handleDeleteClick = (contactId) => {
		const newContacts = [...contacts];

		const index = contacts.findIndex((contact) => contact.id === contactId);

		newContacts.splice(index, 1);
		
		setContacts(newContacts);
	};

	return (
		<>
			<form className="form" autoComplete="off" onSubmit={handleAddFormSubmit}>
				<input
					tyconst handleClickCancelpe="text"
					placeholder="Enter a name..."
					name="fullName"
					required
					onChange={handleAddFormChange}
					value={addFormData.fullName}
				/>
				<input
					type="text"
					placeholder="Enter an address"
					name="address"
					required
					onChange={handleAddFormChange}
					value={addFormData.address}
				/>
				<input
					type="number"
					placeholder="Enter a phone number"
					name="phoneNumber"
					required
					onChange={handleAddFormChange}
					value={addFormData.phoneNumber}
				/>
				<input
					type="email"
					placeholder="Enter an email"
					name="email"
					required
					onChange={handleAddFormChange}
					value={addFormData.email}
				/>
				<button className="addBtn">Add</button>
			</form>

			<input type="text" placeholder="Search..." className="filter" />

			<form className="form_2" autoComplete="off" onSubmit={handleEditFormSubmit}>
				<table className="styled-table">
					<thead>
						<tr>
							<th>N.</th>
							<th>Fullname</th>
							<th>Address</th>
							<th>Phonenumber</th>
							<th>Email</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{
							contacts.map((contact, index) => (
								<Fragment>
									{
										editContactId === contact.id ? (
											<Edit 
												index={index} 
												editFormData={editFormData}
												handleEditFormChange={handleEditFormChange}
												handleClickCancel={handleClickCancel}
											/>
										) : (
											<ReadOnlyRow
												key={contact.id}
												contact={contact}
												index={index}
												handleEditClick={handleEditClick}
												handleDeleteClick={handleDeleteClick}
											/>
										)
									}
								</Fragment>
							))
						}
					</tbody>
				</table>
			</form>
		</>
	)
};

export default Todos;