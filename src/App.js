//Pour créer un composant React :
//1. Créer une classe qui étend React.Component et qui définit une méthode render()
//2. Créer une fonction qui retourne du JSX

/*Méthode 1
class App extends React.Component {

  state = {
    comments = []
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/


import Comment from "./components/Comment";
import Card from "./components/Card";
import {useState} from 'react';

/*Méthode 2*/
function App() {
  //comments est désormais une variable d'état
  //comments est une variable immutable
  const [comments, setComments] = useState([
    {id: 1,name: "Matt", date: "Today at 5:42PM", text: "How artistic!", avatar: "https://semantic-ui.com/images/avatar/small/matt.jpg", isApprouved : false},
    {id: 2,name: "Elliot Fu", date: "Yesterday at 12:30AM", text: "This has been very useful for my research. Thanks as well!",  avatar: "https://semantic-ui.com/images/avatar/small/elliot.jpg", isApprouved : false},
    {id: 3,name: "Jenny Hess", date: "Just now", text: "Elliot you are always so right :)", avatar: "https://semantic-ui.com/images/avatar/small/jenny.jpg", isApprouved : false},
    {id: 4,name: "Joe Henderson", date: "5 days ago", text: "Dude, this is awesome. Thanks so much", avatar: "https://semantic-ui.com/images/avatar/small/joe.jpg", isApprouved : false},
  ])

  const declineComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
    console.log(comments);
  } 

  /*const approveComment = (id) => {
    const newComments = comments.map(comment => {
      if(comment.id === id){
        return {...comment, isApprouved : true}
      }
      else{
        return comment;
      }
    } )
    setComments(newComments);
  }*/

  const approveComment = (id) => {
    setComments(comments.map(comment => comment.id === id ? {...comment, isApprouved : true} : comment));
  }



  return (
    <>
      <h1>First React App</h1>
        <div className="ui cards"> 
            {
              comments.map(
                (comment)=><Card 
                  key={comment.id} 
                  id={comment.id}
                  isApprouved={comment.isApprouved} 
                  declineCommentHandler={declineComment}
                  approveCommentHandler={approveComment}>
                    <Comment {...comment} />
                  </Card>
              )
            }
        </div>
    </>
  );
}

export default App;
