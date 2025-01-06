//Pour créer un composant React :
//1. Créer une classe qui étend React.Component et qui définit une méthode render()
//2. Créer une fonction qui retourne du JSX

/*Méthode 1
class App extends React.Component {
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

/*Méthode 2*/
function App() {
  var comments = [
    {name: "Matt", date: "Today at 5:42PM", text: "How artistic!", avatar: "https://semantic-ui.com/images/avatar/small/matt.jpg"},
    {name: "Elliot Fu", date: "Yesterday at 12:30AM", text: "This has been very useful for my research. Thanks as well!",  avatar: "https://semantic-ui.com/images/avatar/small/elliot.jpg"},
    {name: "Jenny Hess", date: "Just now", text: "Elliot you are always so right :)", avatar: "https://semantic-ui.com/images/avatar/small/jenny.jpg"},
    {name: "Joe Henderson", date: "5 days ago", text: "Dude, this is awesome. Thanks so much", avatar: "https://semantic-ui.com/images/avatar/small/joe.jpg"},
  ]

  return (
    <>
      <h1>First React App</h1>
      <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            {
              comments.map(
                (c)=><Comment {...c} />
              )
            }
      </div>

      <div class="ui cards">
            <Card />
            <Card />
      </div>
    </>
  );
}

export default App;
