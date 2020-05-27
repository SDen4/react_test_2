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
            <div className="app">
                <h1>Title of the APP</h1>
                <First />
                <button onClick={this.handleRevert}>Revert</button>
                <ArticleList articles={this.state.reverted ? articles.reverse() : articles} />
            </div>
        );
    }
    handleRevert = () => this.setState({
            reverted: !this.state.reverted
    })
};

export default App;