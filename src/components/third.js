import React, {Component} from 'react';

class Third extends Component {
    render() {
        const {article} = this.props;
        return (
            <section className='third'>
                <h2>Third Section</h2>
                <button onClick={handleClick}>Close</button>
                <h2>{article.title}</h2>
                <p>{article.text}</p>
                {/* sample of using props */}
                <h3> Creation article date: {article.date}</h3>

                {/* sample of using js code idside jsx (in {}) */}
                <h3> Current date: {(new Date).toDateString()}</h3>
            </section>
        );
    };
};

function handleClick() {
    console.log('Button is working!')
};


export default Third;