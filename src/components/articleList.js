import React, { PureComponent } from 'react';
import Second from './second';
import PropTypes from 'prop-types';


class ArticleList extends PureComponent {

    state = {
        openArticleId: null
    }

    render() {
        const articleElements = this.props.articles.map( (article, index) => 
            <li
                key={article.id}
                className='article'
            >
                <Second
                    article={article}
                    isOpen = {this.state.openArticleId === article.id}
                    onButtonClick = {this.handleClick.bind(this, article.id)}
                />
            </li>
        )
        return (
            <ul className='article__list'>
                {articleElements}
            </ul>
        );
    }
    handleClick = openArticleId => {
        this.setState({
            openArticleId
        })
    }
};

//validation types of props
ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ArticleList;