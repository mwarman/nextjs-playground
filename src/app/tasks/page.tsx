import Link from 'next/link';

import { Task } from './models/task';

type GetTasksResult = [tasks: Task[] | undefined, error: Error | undefined];

const getTasks = async (): Promise<GetTasksResult> => {
  const response = await fetch('https://5t1xj46vmf.execute-api.us-east-1.amazonaws.com/api/tasks', {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    return [undefined, new Error('Failed to fetch tasks' + ' ' + response.status + ' ' + response.statusText)];
  }
  return [(await response.json()) as Task[], undefined];
};

const TasksPage = async () => {
  const [tasks, error] = await getTasks();

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (!tasks || tasks.length === 0) {
    return <div className="text-center">No tasks available.</div>;
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">All Tasks</h3>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex flex-col gap-0.5 max-w-3xl">
            <Link href={`/tasks/${task.id}`} className="font-bold line-clamp-1">
              {task.title}
            </Link>
            {task.detail && <div className="opacity-70 line-clamp-2">{task.detail}</div>}
            <div className="flex items-center justify-between gap-4">
              <div>Status: {task.isComplete ? 'Complete' : 'Incomplete'}</div>
              {task.dueAt && <div>Due at: {new Date(task.dueAt).toLocaleString()}</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
