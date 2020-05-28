import React, {PureComponent} from 'react';

class Third extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    componentWillUnmount(){
        console.log('mounting')
    }

    componentWillUpdate(){
        console.log('updating')
    }

    render() {
        const {article} = this.props;

        const title = <h2 className='second__test'>{article.title}</h2>;
        const text = this.state.isOpen && <p>{article.text}</p>;
        const data = this.state.isOpen && <h3>Creation article date: {article.date}</h3>;
        const pictureBackground = this.state.isOpen && <div className="image__container"></div>;
        const pictureTag = this.state.isOpen && <img className="image" srcSet="/assets/images/1.jpg"></img>;
        {/* sample of using js code idside jsx (in {}) */}
        const curDate = this.state.isOpen && <h3> Current date: {(new Date).toDateString()}</h3>;


        return (
            <section className='second'>
                <div className="second__title">
                    {title}
                    <button 
                        onClick={this.handleClick} 
                        // sample of using 2 classe, one of them - with js
                        className={`${this.state.isOpen ? "buttonActive" : "buttonUnActive"} ${"buttonCommon"}`}
                    >
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </div>
                {text}
                <div className="pictures">
                    {pictureBackground}
                    {pictureTag}
                </div>
                {data}
                {curDate}
            </section>
        );
    };
    handleClick = () => {
        this.setState({
            // set the invert statetment
            isOpen: !this.state.isOpen
        });
    };
};

export default Third;