import React from 'react';
import { NewSaleForm } from './NewSaleForm';

export const Customer = (props) => {
    const { customer, updateCustomer } = props;

    const deleteSale = (customerId) => {
        const updatedCustomer = {
            ...customer,
            sales: customer.sales.filter((x) => x._id !== customerId)
        };
        updateCustomer(updatedCustomer);
    }

    const addNewSale = (sale) => updateCustomer({...customer, sales: [...customer.sales, sale]});

    const sales = () => (
        <ul>
          {customer.sales.map((sale, index) => (
            <li key={index}>
                <label>{`${sale.name} Area: ${sale.price}`}</label>
                <button onClick={(e) => deleteSale(sale._id)}></button>
            </li>
          ))}  
        </ul>
    );

    return(
        <div>
            <h1>{customer.name}</h1>
            {
                sales({ sales, customerId: customer._id, deleteSale})
            }
            <NewSaleForm addNewSale= {addNewSale} />
        </div>
    )

}