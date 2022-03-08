import { Provider } from 'react-redux';
import store from "./redux/store";

import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>
          Jeff's Todos:
        </h1>
        <Todos />
        <TodoForm />
      </div>
    </Provider>
  );
}

export default App;
