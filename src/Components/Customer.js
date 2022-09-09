import React from 'react';
import { customerApi } from '../Rest/CustomerApi';
import { NewSaleForm } from './NewSaleForm';



export const Customer = (props) => {
    console.log(props);
    const { customer, updateCustomer } = props;


    // delete sale points to the api delete function
    const deleteSale = (customer, saleId) => {
        console.log('customerid:', customer)
        customerApi.delete(customer, saleId)
        const updatedCustomer = {
            ...customer,
            sales: customer.sales.filter((x) => x._id !== customer)
            
        };
        console.log(updatedCustomer, 'updatedcustomer');
        updateCustomer(updatedCustomer);
        
    }
// adds new sales to each customer object
    const addNewSale = (sale) => updateCustomer({...customer, sales: [...customer.sales, sale]});
// iterates over sales array
    const sales = () => (
        <ul>
          {customer.sales.map((sale, index) => (
            <li key={index}>
                <label>{`${sale.name} Price: ${sale.price}`}</label>
                <button onClick={(e) => deleteSale(customer, sale.saleId)}>Delete Sale</button>
            </li>
          ))}  
        </ul>
    );


    // creates divs to hold customer objects including newsaleforms
    return(
        <div>
            
            <h1>{customer.customerName}</h1>
            {
                sales({ sales, customerId: customer._id, deleteSale})
            }
            <NewSaleForm addNewSale= {addNewSale} />
        </div>
    )

}