import '@shopify/polaris/build/esm/styles.css';
import { Header } from './Components/Header';
// import { Sidebar } from './Components/Sidebar';
import { Footer } from './Components/Footer';
import { AddCustomer } from './Components/Customers/AddCustomer';
import { Customers } from './Components/Customers/Customers';
import React, { useState, useEffect } from 'react';

function App() {
	
  	const onDelete = (customer) => {
    	setCustomers(customers.filter((e) => {
      		return e !== customer;
    	}));
  	}
  	
	const addCustomer = (firstName,lastName,address) => {
		let cid;
		cid = customers.length > 0 ? customers[customers.length - 1].cid + 1 : 0;
		const myCustomer = {
			cid       : cid,
			firstName : firstName,
			lastName  : lastName,
			address   : address
		};
		setCustomers([...customers,myCustomer])
	}

	const [customers, setCustomers] = useState([]);

	return (
		<div className="card">	
			<Header searchBar={true} title="React App"></Header>
			<AddCustomer addCustomer={addCustomer}></AddCustomer>
			<Customers onDelete={onDelete} customers={customers}></Customers>
			<Footer></Footer>
		</div>    
	);
}

export default App;
