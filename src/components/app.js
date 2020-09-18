import React, {Component} from 'react';

import First from './first';
import ArticleList from './articleList';

import articles from '../scripts/articles';



class App extends Component {
    state = {
        reverted: false
    }
    render() {
        return (
            <div className='app'>
                <h1>Title of the APP</h1>
                <First />
                <button onClick={this.handleRevert}>Revert</button>
                {/* using slice() for change a copy but not base array */}
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        );
    }
    handleRevert = () => {
        console.log('1')
        this.setState({
            reverted: !this.state.reverted
        })
    };
};

export default App;