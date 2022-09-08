import React from 'react';
import { customerApi } from '../Rest/CustomerApi';
import { NewSaleForm } from './NewSaleForm';

export const Customer = (props) => {
    console.log(props);
    const { customer, updateCustomer } = props;

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

    const addNewSale = (sale) => updateCustomer({...customer, sales: [...customer.sales, sale]});

    const sales = () => (
        <ul>
          {customer.sales.map((sale, index) => (
            <li key={index}>
                <label>{`${sale.name} Area: ${sale.price}`}</label>
                <button onClick={(e) => deleteSale(customer, sale.saleId)}>Delete Sale</button>
            </li>
          ))}  
        </ul>
    );

    return(
        <div>
            childtest
            <h1>test</h1>
            {
                sales({ sales, customerId: customer._id, deleteSale})
            }
            <NewSaleForm addNewSale= {addNewSale} />
        </div>
    )

}