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

        const title = this.state.isOpen && <h2 className='third'>{article.title}</h2>;
        const text = this.state.isOpen && <p>{article.text}</p>;
        const data = this.state.isOpen && <h3>Creation article date: {article.date}</h3>;

        return (
            <section className='second'>
                <div className="third__title">
                    <h2 className="subtitle">Article</h2>
                    <button 
                        onClick={this.handleClick} 
                        // sample of using 2 classe, one of them - with js
                        className={`${this.state.isOpen ? "buttonActive" : "buttonUnActive"} ${"buttonCommon"}`}
                    >
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </div>
                {title}
                {text}
                {data}
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