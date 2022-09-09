 import React from 'react';
 import { Customer } from './Customer';
 import { customerApi } from '../Rest/CustomerApi';

 export class CustomerList extends React.Component {
    state = {
        customers: []
    };
// grabs customers from api
    componentDidMount() {
        this.fetchCustomers();
    };
// grabs customers from api part 2
    fetchCustomers = async() => {
        const customers = await customerApi.get();
        this.setState({ customers });
    };
// updates sales if customer object changes
    updateCustomer = async (updatedCustomer) => {
        await customerApi.put(updatedCustomer);
        this.fetchCustomers();
    };

    render() {
        return(
            <div className='customer-list'>
                
                {this.state.customers.map((customer) => (
                    <Customer 
                    customer={customer}
                    key={customer._id}
                    updateCustomer={this.updateCustomer}
                    
                    />
                    
                ))}
                
            </div>
        )
    }


 }