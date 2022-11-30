import React, { useState } from "react";
import "./Todos.css"
import data from "../../mock-data.json";
import ReadOnlyRow from "../readonlyrow/ReadOnlyRow";
import inputsData from "../../mock-inputs.json"
import FormInput from "../forminput/FormInput";

const initialState = {
	fullName: "",
	address: "",
	phoneNumber: "",
	email: ""
}

const Todos = () => {
	const [tableData, setTableData] = useState(data);
	const [addFormData, setAddFormData] = useState(initialState);
	const [editableUserData, setEditableUserData] = useState({
		isEdit: false,
		userIndex: false
	});
	const [query, setQuery] = useState("")


	const isFilledFields =
		Boolean(addFormData.fullName) && Boolean(addFormData.address) && Boolean(addFormData.phoneNumber) && Boolean(addFormData.email)

	const handleChange = (e) => {
		setAddFormData({ ...addFormData, [e.target.name]: e.target.value })
	}

	const handleAddSubmit = (e) => {
		e.preventDefault();

		if (isFilledFields) {
			if (editableUserData.isEdit) {
				const editedData = tableData;
				editedData.splice(editableUserData.userIndex, 1, addFormData);

				setEditableUserData(editedData);

				setEditableUserData({
					isEdit: false,
					userIndex: null
				})
			} else {
				const newContact = {
					id: Math.random(Math.floor() * 10000),
					fullName: addFormData.fullName,
					address: addFormData.address,
					phoneNumber: addFormData.phoneNumber,
					email: addFormData.email
				}
				const newFormData = [...tableData, newContact];
				setTableData(newFormData);
			}

		}
		setAddFormData(initialState)
	}

	const handleEditCLick = (data, index) => {
		setAddFormData(data)
		setEditableUserData({
			isEdit: true,
			userIndex: index
		})
	}

	const handleRemoveClick = ({id}) => {
		const removeItem = [...tableData].filter((item) => item.id !== id);

		setTableData(removeItem)
	}

	const handleCancelClick = () => {
		setAddFormData(initialState)
	}

	const keys = ["fullName", "address", "phoneNumber", "email"];

	const search = (data) => {
		return data.filter((item) => 
			keys.some((key) => item[key].toLowerCase().includes(query))
		)
	}

	return (
		<div className="container">
			<div className="container_wrapper">
				<div className="container_search">
					<input 
						className="search" 
						type="text" 
						placeholder="Search..." 
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
				</div>
				<form className="form" autoComplete="off" onSubmit={handleAddSubmit}>
					{
						inputsData.map((input) => (
							<FormInput
								key={input.id}
								{...input}
								value={addFormData[input.name]}
								handleChange={handleChange}
							/>
						))
					}
					<button disabled={!isFilledFields} className="form_button">
						{editableUserData.isEdit ? "Edit" : "Add"}
					</button>
				</form>
				<table className="table">
					<thead>
						<tr>
							<th>#</th>
							<th>Fullname</th>
							<th>Address</th>
							<th>Phone Number</th>
							<th>Email</th>
							<th>Edit</th>
							<th>Cancel</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{
							search(tableData).map((item, index) => (
								<ReadOnlyRow
									key={item.id}
									item={item}
									index={index}
									handleEditCLick={handleEditCLick}
									editableUserData={editableUserData}
									handleCancelClick={handleCancelClick}
									handleRemoveClick={handleRemoveClick}
								/>
							))
						}
					</tbody>
				</table>
			</div>
		</div>
	)
};

export default Todos;