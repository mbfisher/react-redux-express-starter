import React from 'react';

const Html = ({content}) => {
    return (
        <html>
        <body>
            <div id="content" dangerouslySetInnerHTML={{__html: content}}></div>
            <script src="/bundle.js"></script>
        </body>
        </html>
    );
};

export default Html;