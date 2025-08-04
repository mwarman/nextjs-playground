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
    return <h2>Task not found</h2>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      {task.detail && <p>{task.detail}</p>}
      <p>Status: {task.isComplete ? "Complete" : "Incomplete"}</p>
      {task.dueAt && <p>Due at: {new Date(task.dueAt).toLocaleString()}</p>}
    </div>
  );
};

export default TaskDetailPage;
