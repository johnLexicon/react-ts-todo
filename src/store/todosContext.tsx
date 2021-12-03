import { createContext, useState } from 'react';
import Todo from '../models/Todo';

interface ITodosContext {
  items: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (todoId: string) => void;
  editTodo: (editedTodo: Todo) => void;
}

export const TodosContext = createContext<ITodosContext>({
  items: [],
  addTodo: (title: string) => {},
  removeTodo: (todoId: string) => {},
  editTodo: (editedTodo: Todo) => {}
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    setTodos((prevState: Todo[]) => {
      const newTodo = new Todo(title);
      return prevState.concat(newTodo);
    });
  };
  const handleEditTodo = (editedTodo: Todo) => {
    setTodos((prevState) => {
      const index = prevState.findIndex((t: Todo) => t.id === editedTodo.id);
      if (index === -1) return prevState;
      prevState[index] = editedTodo;
      return [...prevState];
    });
  };
  const handleRemoveTodo = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((t: Todo) => t.id !== todoId);
    });
  };

  const providerValues: ITodosContext = {
    items: todos,
    addTodo: handleAddTodo,
    editTodo: handleEditTodo,
    removeTodo: handleRemoveTodo
  };

  return (
    <TodosContext.Provider value={providerValues}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
