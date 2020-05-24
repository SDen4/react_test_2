import React from 'react';

function Third(props) {
    const {article} = props;
    return (
        <section className='third'>
            <h2>Third Section</h2>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
            {/* sample of using props */}
            <h3> Creation date: {article.date}</h3>

            {/* sample of using js code idside jsx (in {}) */}
            <h3> Current date: {(new Date).toDateString()}</h3>
        </section>
    );
};

export default Third;