const API_ENDPOINT = "https://62fd71deb9e38585cd51f570.mockapi.io/customersales";


class CustomerApi {
    get = async () => {
        try{
            const resp = await fetch(API_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('We have run into an issue fetching the API', e);
        }
    }

    put = async(customer) => {
        console.log('customerapiputrequest', customer);
        try {
            const resp = await fetch(`${API_ENDPOINT}/${customer._id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(customer)
            });
            return await resp.json();
        } catch(e) {
            console.log('the put request has failed.', e);
        }
    }

    delete = async(customer, saleId) => {
        console.log('Delete function request log', customer);
        console.log('delete function saleId', saleId);
        console.log('finding saleid in delete funct', customer.sales);
        //for loop through customer.sales. put try catch block into loop conditions.
        for (let i = 0; i < customer.sales.length; i++) {
            console.log('looping through array',customer.sales[i]);
            if(customer.sales[i].saleId == saleId) {
                console.log('its working!!!!', customer.sales[i].saleId, customer.sales[i], customer);
                customer.sales.splice(customer.sales[i], 1);

                try {
                    const resp = await fetch(`${API_ENDPOINT}/${customer._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(customer)
                    });
                    return await resp.json();
                } catch(e) {
                    console.log('the delete request has failed.', e);
                }
            }
        }
        // try {

        //     const resp = await fetch(`${API_ENDPOINT}/${customer._id5}`, {
        //         method: 'PUT',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify(customer)
        //     });
        //     return await resp.json();
        // } catch(e) {
        //     console.log('the delete request has failed.', e);
        // }
    }



}

export const customerApi = new CustomerApi