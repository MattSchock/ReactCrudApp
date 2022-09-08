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

    push = async(customer) => {
        try {
            const resp = await fetch(`${API_ENDPOINT} ${customer.id}`, {
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
}

export const customerApi = new CustomerApi