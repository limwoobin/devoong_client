import { useSelector } from 'react-redux';
import { RootState } from '../../../reducers';

export default function useTodos() {
  const todos = useSelector((state: RootState) => state.todoReducer);

  console.log('todos' , todos);

  return todos;
}