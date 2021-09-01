import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loop from './Loop';
import '../scss/components/_articles.scss';
function Articles(props) {

  const [articles, updateArticles] = useState(null);
  const [isMounted, updateIsMounted] = useState(true);
  const [filter, updateFilter] = useState('');
  const [sort, updateSort] = useState('');


  const FetchArticlesData = async () => {
    return await Axios.get('json/articles.json');
  }

  useEffect(() => {
    if (!isMounted) {
      return
    }
    // Här hämtar vi data och sparar ner det/uppdaterar till vår useState 
    FetchArticlesData().then(res => {
      updateArticles(res.data.articles);

      // Stäng av vår loader.
      updateIsMounted(false);
    }).catch(err => console.log(err))
  }, [])

  return (
    <section className="articles">
      <div className="filter-sort-container">
        <div className="filter">
          <h2>Filtrera: </h2>
          <button className="btn news" onClick={() => updateFilter('news')}>Nyheter</button>
          <button className="btn articles" onClick={() => updateFilter('articles')}>Artiklar</button>
        </div>
        <div class="sort">
          <h2>Sortera: </h2>
          <button className="btn asc" onClick={() => updateSort('asc')}>Senaste</button>
          <button className="btn desc" onClick={() => updateSort('desc')}>Äldst</button>
        </div>

      </div>
      {
        articles !== null &&
        <div className="container-articles">
          <Loop filter={filter} articles={articles} sort={sort} />
        </div>
      }
    </section>
  );
}

export default Articles;