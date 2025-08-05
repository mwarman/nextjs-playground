import { Task } from '../models/task';

type GetTaskResult = [tasks: Task | undefined, error: Error | undefined];

const getTask = async (taskId: string): Promise<GetTaskResult> => {
  const response = await fetch(`https://5t1xj46vmf.execute-api.us-east-1.amazonaws.com/api/tasks/${taskId}`, {
    next: { revalidate: 10 },
  });
  if (!response.ok) {
    return [undefined, new Error('Failed to fetch task' + ' ' + response.status + ' ' + response.statusText)];
  }
  return [(await response.json()) as Task, undefined];
};

const TaskDetailPage = async ({ params }: { params: Promise<{ taskId: string }> }) => {
  const { taskId } = await params;
  console.log(`Task ID: ${taskId}`);

  const [task, error] = await getTask(taskId);
  console.log(`Task:`, task);

  if (error) {
    console.error(`Error fetching task: ${error.message}`);
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  if (!task) {
    return <h3 className="text-lg font-bold">Task not found</h3>;
  }

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">{task.title}</h3>
      {task.detail && (
        <div className="mb-2 text-sm">
          <div className="font-bold mb-1 uppercase">Details:</div>
          <div className="mb-2 opacity-70 text-base">{task.detail}</div>
        </div>
      )}

      <div className="flex gap-4 mb-2 items-center text-sm">
        <div className="font-bold uppercase">Status:</div>
        <div className="text-xs px-2 py-1 rounded-md font-bold bg-blue-600 text-gray-50">
          {task.isComplete ? 'Complete' : 'Incomplete'}
        </div>
      </div>

      {task.dueAt && (
        <div className="flex gap-4 mb-2 items-center text-sm">
          <div className="font-bold uppercase">Due at:</div>
          <div className="opacity-70">{new Date(task.dueAt).toLocaleString()}</div>
        </div>
      )}
    </div>
  );
};

export default TaskDetailPage;
