import React from 'react';

const Html = ({content}) => {
    console.log(content);

    return (
        <html>
        <body dangerouslySetInnerHTML={{__html: content}}></body>
        </html>
    );
};

export default Html;