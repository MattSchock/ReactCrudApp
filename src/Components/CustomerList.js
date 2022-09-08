 import React from 'react';
 import { Customer } from './Customer';
 import { customerApi } from '../Rest/CustomerApi';

 export class CustomerList extends React.Component {
    state = {
        customers: []
    };

    componentDidMount() {
        this.fetchCustomers();
    };

    fetchCustomers = async() => {
        const customers = await customerApi.get();
        this.setState({ customers });
    };

    updateCustomer = async (updatedCustomer) => {
        await customerApi.put(updatedCustomer);
        this.fetchCustomers();
    };

    render() {
        return(
            <div>
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