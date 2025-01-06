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

/*Méthode 2*/
function App() {
  return (
    <>
      <h1>First React App</h1>
      <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
      </div>
    </>
  );
}

export default App;
