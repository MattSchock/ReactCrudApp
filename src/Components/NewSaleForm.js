import React, { useState } from 'react';

export const NewSaleForm = (props) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(undefined);

    const handlePriceInput = (e) => {
        const int = parseInt(e.target.value, 10);
        setPrice(int >= 0 ? int : '');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && price) {
            props.addNewSale({name, price});
            setName('');
            setPrice('');
        } else {
            console.log('invalid');
        }
    };

    return(
        <div>
            <h4>Add a sale</h4>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    />
            </form>
            <input
                type='text'
                placeholder='price'
                onChange={handlePriceInput}
                value={price}
                />
                <button type='submit'>Add Sale</button>
        </div>
    )

}