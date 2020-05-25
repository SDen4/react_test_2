import React from 'react';
import {render} from 'react-dom';

import First from './first';
// import Second from './second';
import Third from './third';

import ArticleList from './articleList';

import articles from '../scripts/articles';



function App() {
    return (
        <div className="app">
            <h1>Title of the APP</h1>
            <First />
            <ArticleList articles={articles} />
            <Third article={articles[0]} />
        </div>
    );
};

render(<App />, document.getElementById('root'));