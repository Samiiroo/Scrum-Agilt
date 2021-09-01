import React from 'react';

function Loop(props) {

  let ListOfArticles = props.articles;
  const displayLoop = () => {
    console.log("props: ", props)
    let filter = [];
    if (props.filter === 'news') {
      if (props.sort === 'asc') {
        console.log("asc")
      }
      else if (props.sort === 'desc') {
        console.log('desc')
      }
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

    return filter.map((test, key) => <div key={key} className="demo">
      <h2>{test.title}</h2>
      <h3>{test.author}</h3>
      <h4>{test.date}</h4>
      <div className="tags">
        {test.tag}
      </div>
    </div>)

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