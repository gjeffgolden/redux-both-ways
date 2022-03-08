import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const TodoForm = () => {
    const dispatch = useDispatch();
    const handleAddTodo = () => dispatch(addTodo());
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" />
            <input type="submit" value="Add Todo" />
        </form>
    );
};

export default TodoForm;