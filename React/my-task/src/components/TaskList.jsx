import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

export default function TaskList() {
  const tasks = useSelector(state => state.tasks);

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}