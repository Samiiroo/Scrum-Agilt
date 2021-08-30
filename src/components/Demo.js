import React from 'react';

function Demo(props) {

  const DemoText = () => {
    if (props.lang === 'sv') {
      return 'Hej världen';
    }
    else {
      return 'Helloworld'
    }
  }

  return (
    <div>
      {DemoText()}
    </div>
  );
}

export default Demo;