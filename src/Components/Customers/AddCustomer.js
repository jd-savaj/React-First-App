import React, { useState } from 'react';

export const AddCustomer = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] 	= useState("");
	const [address, setAddress] 	= useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if(!firstName || !lastName || !address){			
			alert('Please enter all fields')
		} else {
			props.addCustomer(firstName,lastName,address)
			setFirstName('');
			setLastName('');
			setAddress('');
		}
	}
  	return (
		<div className="card-body page-center" style={{paddingTop:'100px'}}>
			<h2 className="mb-3" style={{fontSize:'24px',fontWeight:'bold'}}>Add Customer : </h2>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="firstName">First Name</label>
					<input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="form-control" id="firstName" placeholder="Enter First Name" />
				</div>
				<div className="form-group">
					<label htmlFor="lastName">Last Name</label>
					<input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="form-control" id="lastName" placeholder="Enter First Name" />
				</div>
				<div className="form-group">
					<label htmlFor="address">Address</label>
					<input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder="Enter First Name" />
				</div>
				<button type="submit" className="btn btn-sm btn-success">Add Customer</button>
			</form>
		</div>
  	)
}
