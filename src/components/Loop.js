import React from 'react';

function Loop(props) {

  let ListOfArticles = props.articles;
  const displayLoop = () => {
    console.log("props: ", props)
    let filter = [];

    if (props.sort === 'asc') {
      ListOfArticles.sort((a, b) => a.date - b.date)
      console.log("ASC: ", ListOfArticles)
    }
    else if (props.sort === 'desc') {
      ListOfArticles.sort((a, b) => b.date - a.date)
      console.log("DESC: ", ListOfArticles)
    }


    if (props.filter === 'news') {
      filter = ListOfArticles.filter((article, key) => {
        return article.tags[0] === "nyheter";
      });
    }
    else if (props.filter === 'articles') {
      filter = ListOfArticles.filter((article, key) => {
        if (props.sort === 'asc') {
          console.log("asc")
        }
        else if (props.sort === 'desc') {
          console.log('desc')
        }
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
      console.log(filter)
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