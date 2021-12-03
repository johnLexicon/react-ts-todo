import { useRef, useContext } from 'react';
import { TodosContext } from '../store/todosContext';

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const titleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const todoTitle = titleRef.current!.value.trim();
    if (todoTitle === '') {
      return;
    }
    addTodo(todoTitle);
    titleRef.current!.value = '';
  };
  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div>
        <input
          id="title"
          className="form-control"
          placeholder="Title..."
          type="text"
          ref={titleRef}
        />
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-success">Add Todo</button>
      </div>
    </form>
  );
};

export default NewTodo;
