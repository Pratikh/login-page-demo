import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './navigationBar/NavigationBar';
import '../public/style.css';

class Test extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
