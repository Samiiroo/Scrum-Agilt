import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Loop from './Loop';
import '../scss/components/_articles.scss';
import Loader from './Loader';
function Articles(props) {

  const [articles, updateArticles] = useState(null);
  const [isMounted, updateIsMounted] = useState(true);
  const [filter, updateFilter] = useState('');
  const [sort, updateSort] = useState('');


  const FetchArticlesData = async () => {
    if (props.lang === 'en') {
      return await Axios.get('json/article-en.json');
    }
    else {
      return await Axios.get('json/article-sv.json');
    }
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
    <section className="articles" style={{ background: "url('/assets/img/article-bg.png') center/cover no-repeat" }}>
      <h2 className="center">Nyheter & Artiklar</h2>
      <div className="filter-sort-container">
        <div className="filter center">
          <button className="btn news" onClick={() => updateFilter('news')}>Nyheter</button>
          <button className="btn articles" onClick={() => updateFilter('articles')}>Artiklar</button>
        </div>
        <div class="sort center">
          <button className="btn asc" onClick={() => updateSort('asc')}>Senaste</button>
          <button className="btn desc" onClick={() => updateSort('desc')}>Äldst</button>
        </div>

      </div>
      {isMounted && <Loader />}
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