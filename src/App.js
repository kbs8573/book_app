import React from 'react';
import './App.css';
import Book from './book';

/*
function App() {
  return (
    <div>
      <h1>My Favorite Books</h1>
      <Book title="21세기를 위한 21가지 제언" url="https://t1.daumcdn.net/cfile/blog/9997A0335C6D403E0F"/>
      <Book title="호모데우스" url="https://image.yes24.com/momo/TopCate1261/MidCate008/123392281.JPG"/>
    </div>
  );
}
*/


const bookList = [
                    { id:0, 
                      title:"사피엔스", 
                      image:"https://image.yes24.com/Goods/23030284/L",
                      rating : 4.9
                    },
                    { id:1, 
                      title:"호모데우스", 
                      image:"https://debatingday.com/wp/wp-content/uploads/2018/09/20180905_002035.jpg",
                      rating : 5.0
                    },
                    { id:2, 
                      title:"21세기를 위한 21가지 제언", 
                      image:"https://t1.daumcdn.net/cfile/blog/9997A0335C6D403E0F",
                      rating : 4.5
                    }
                  ]     


class App extends React.Component{

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    console.log("Constructor");
  }

  render(){
    console.log("render");
    return (
      <div>
        <h1>My Favorite Books</h1>
        { bookList.map(book => <Book title={book.title} url={book.image}/> ) }
      </div>
    );
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }
}

export default App;
