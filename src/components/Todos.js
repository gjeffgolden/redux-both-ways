import Todo from "./Todo";
import { useSelector } from "react-redux";



const Todos = () => {
    const todoList = useSelector(state => state.todos);
    const renderTodos = () => {
        return todoList.map(todo => <Todo task={todo.task} completed={todo.completed} />);
    }

    return <div>{renderTodos()}</div>
};

export default Todos;