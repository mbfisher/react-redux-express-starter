import React from 'react';

const Greeting = ({greeting, onSayHello}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <button onClick={onSayHello}>Say Hello!</button>
        </div>
    );
};

export default Greeting;