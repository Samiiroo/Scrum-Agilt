import React from 'react';

function Loop(props) {
  let list = [];
  let ListOfArticles = props.articles;
  var movies = [
    { title: 'The Godfather', rating: 9.2, release: '24 March 1972' },
    { title: 'The Godfather: Part II', rating: 9.0, release: '20 December 1972' },
    { title: 'The Shawshank Redemption', rating: 9.3, release: '14 October 1994' },
  ];

  const displayLoop = () => {
    console.log("props: ", ListOfArticles)
    let filter = [];

    if (props.sort === 'asc') {
      ListOfArticles.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateB - dateA;
      });
    }
    else if (props.sort === 'desc') {
      ListOfArticles.sort(function (a, b) {
        var dateA = new Date(a.date), dateB = new Date(b.date);
        return dateA - dateB;
      });
    }


    if (props.filter === 'news') {
      filter = ListOfArticles.filter((article, key) => {
        return article.tags[0] === "nyheter";
      });
    }
    else if (props.filter === 'articles') {
      filter = ListOfArticles.filter((article, key) => {
        if (article.tags.length < 2) {
          return article.tags[0] === "artikel";
        }
        else {
          return article.tags[1] === "artikel";
        }
      });
    }
    else {
      filter = props.articles;
    }


    return filter.map((content, key) => <div key={key} className="content">
      <h2>{content.title}</h2>
      <a href="#">{content.readmore}</a>
      <h4>{content.author}</h4>
      <div className={`${content.tags.length <= 1 ? 'tag' : 'tags'}`}>
        {loopTags(content.tags)}
      </div>
      <h4>{content.date}</h4>
    </div>
    )
  }

  const loopTags = (tags) => {
    let rows = []
    for (let i = 0; i < tags.length; i++) {
      rows.push(<span>{tags[i]}</span>);
    }

    return rows;
  }

  return (
    <>
      {
        displayLoop()
      }
    </>
  );
}

export default Loop