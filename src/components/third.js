import React, {Component} from 'react';

class Third extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
        }
    };
    render() {
        const {article} = this.props;

        const title = this.state.isOpen && <h2>{article.title}</h2>;
        const text = this.state.isOpen && <p>{article.text}</p>;
        const data = this.state.isOpen && <h3>Creation article date: {article.date}</h3>;

        return (
            <section className='third'>
                <div className="third__title">
                    <h2>Third Section</h2>
                    <button onClick={this.handleClick} className={this.state.isOpen ? "buttonActive" : "buttonUnActive"}>{this.state.isOpen ? 'Close' : 'Open'}</button>
                </div>
                {title}
                {text}
                {data}
                {/* sample of using js code idside jsx (in {}) */}
                <h3> Current date: {(new Date).toDateString()}</h3>
            </section>
        );
    };
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
};

export default Third;