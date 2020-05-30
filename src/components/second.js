import React, {PureComponent} from 'react';

class Second extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const {article, isOpen, onButtonClick} = this.props;

        const title = <h2 className='second__test'>{article.title}</h2>;
        const text = isOpen && <p>{article.text}</p>;
        const data = isOpen && <h3>Creation article date: {article.date}</h3>;
        const pictureBackground = isOpen && <div className="image__container"></div>;
        const pictureTag = isOpen && <img className="image" srcSet="/assets/images/1.jpg"></img>;
        {/* sample of using js code idside jsx (in {}) */}
        const curDate = isOpen && <h3> Current date: {(new Date).toDateString()}</h3>;


        return (
            <section className='second'>
                <div className="second__title">
                    {title}
                    <button 
                        onClick={onButtonClick} 
                        // sample of using 2 classe, one of them - with js
                        className={`${isOpen ? "buttonActive" : "buttonUnActive"} ${"buttonCommon"}`}
                    >
                        {isOpen ? 'Close' : 'Open'}
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
};

export default Second;