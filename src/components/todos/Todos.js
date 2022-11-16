import React, { useState } from "react";
import "./Todos.css"
import data from "../../mock-data.json"

const Todos = () => {
	const [contacts, setContacts] = useState(data);
	const [addFormData, setAddFormData] = useState({
		fullName: "",
		address: "",
		phoneNumber: "",
		email: ""
	});

	const handleAddFormChange = (event) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute("name");
		const fieldValue = event.target.value;

		const newFormData = {...addFormData};
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
		};

		const newContacts = [...contacts, newContact];
		
		setContacts(newContacts)
		setAddFormData({
			fullName: "",
			address: "",
			phoneNumber: "",
			email: ""
		});

		// setAddFormData({
		// 	fullName: "",
		// 	address: "",
		// 	phoneNumber: "",
		// 	email: ""
		// })
		
	};

	return (
		<>
			<form className="form" autoComplete="off" onSubmit={handleAddFormSubmit}>
				<input 
					type="text" 
					name="fullName" 
					placeholder="Enter a name"
					value={addFormData.fullName}
					required="required"
					onChange={handleAddFormChange}
				/>
				<input 
					type="text"
					name="address"
					placeholder="Enter a adress"
					required="required"
					onChange={handleAddFormChange}
				/>
				<input 
					type="text"
					name="phoneNumber"
					placeholder="Enter a phonenumber"
					required="required"
					onChange={handleAddFormChange}
				/>
				<input 
					type="text"
					name="email"
					placeholder="Enter a email"
					required="required"
					onChange={handleAddFormChange}
				/>
				<button className="addBtn" type="submit">Add</button>
			</form>

			<input className="filter" type="text" placeholder="Search..." />

			<table className="styled-table">
				<thead>
					<tr>
						<th>Name</th>
						<th>Address</th>
						<th>Phone Number</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						contacts.map((contact) => (
							<tr key={contact.id}>
								<td>{contact.fullName}</td>
								<td>{contact.address}</td>
								<td>{contact.phoneNumber}</td>
								<td>{contact.email}</td>
							</tr>
						))
					}

					{/* <tr>
						<td>Sam Petrosyan</td>
						<td>Gevorg Chaush st.</td>
						<td>+64733</td>
						<td>sam@email.com</td>
					</tr> */}
					
				</tbody>
			</table>
		</>
	);
};

export default Todos;