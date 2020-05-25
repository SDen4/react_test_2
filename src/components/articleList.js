import React from "react";
import Second from "./second";


export default function ArticleList( {articles} ){
    const articleElements = articles.map(article => 
        <li key={article.id}><Second article={article} /></li>
        )
    return (
        <ul>
            {articleElements}
        </ul>
    );
};