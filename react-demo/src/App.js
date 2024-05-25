import "./App.css";
import Parent from "./components/Parent";
import FavoriteColor from "./components/FavoriteColor";
import { Counter } from "./components/Counter";
import { EventBind } from "./components/EventBind";
import ClassClick from "./components/ClassClick";
import FunctionClick from "./components/FunctionClick";
import { Greet, Greet2, Greet3 } from "./components/Greet";
import { Welcome, Welcome2 } from "./components/Welcome";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Greet firstName="Josh" lastName="Ward">
        <button>Visit</button>
      </Greet>
      <Greet2 firstName="Josh" lastName="Ward" />
      <Welcome firstName="Josh" lastName="Ward" />
      <Welcome2 />
      <Greet3 firstName="Mufasa" lastName="Humperdink" />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <Counter />
      <FavoriteColor />
      <Parent />
      <Table />
    </div>
  );
}

export default App;
