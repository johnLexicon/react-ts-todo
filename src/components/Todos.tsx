import Todo from '../models/Todo';
import TodoCard from './TodoCard';
import { TodosContext } from '../store/todosContext';
import { useContext } from 'react';

const Todos: React.FC = () => {
  const { items: todos } = useContext(TodosContext);
  return (
    <div className="todo-list">
      {todos.map((t: Todo) => (
        <TodoCard todo={t} key={t.id} />
      ))}
    </div>
  );
};

export default Todos;
