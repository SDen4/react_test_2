import React from 'react';
import {render} from 'react-dom';

import First from './first';
import ArticleList from './articleList';

import articles from '../scripts/articles';



function App() {
    return (
        <div className="app">
            <h1>Title of the APP</h1>
            <First />
            <ArticleList articles={articles} />
        </div>
    );
};

render(<App />, document.getElementById('root'));