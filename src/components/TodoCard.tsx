import Todo from '../models/Todo';
import { TodosContext } from '../store/todosContext';
import { useContext } from 'react';
import './todos.css';

const TodoCard: React.FC<{ todo: Todo }> = (props) => {
  const { todo } = props;
  const { editTodo, removeTodo } = useContext(TodosContext);
  const handleComplete = (event: React.MouseEvent) => {
    const editedTodo = { ...todo, completed: !todo.completed };
    editTodo(editedTodo);
  };

  return (
    <div className="card mb-3">
      <div
        onClick={handleComplete}
        className={`row card-body todo-item ${
          todo.completed ? 'completed' : ''
        }`}
      >
        <div className="col-10">{todo.title}</div>
        <div className="col-2">
          <button
            onClick={(event: React.MouseEvent) => removeTodo(todo.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
