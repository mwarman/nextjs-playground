import { tasks } from "../models/task";

const TaskDetailPage = async ({
  params,
}: {
  params: Promise<{ taskId: string }>;
}) => {
  const { taskId } = await params;
  console.log(`Task ID: ${taskId}`);

  // Placeholder for fetching task details based on taskId
  const task = tasks.find((t) => t.id === taskId);
  console.log(`Task:`, task);

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
          {task.isComplete ? "Complete" : "Incomplete"}
        </div>
      </div>

      {task.dueAt && (
        <div className="flex gap-4 mb-2 items-center text-sm">
          <div className="font-bold uppercase">Due at:</div>
          <div className="opacity-70">
            {new Date(task.dueAt).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetailPage;
