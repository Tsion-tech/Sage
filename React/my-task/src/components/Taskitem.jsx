import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/tasksSlice';

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.title}
        </span>
      </label>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </li>
  );
}