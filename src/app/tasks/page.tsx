import Link from "next/link";

import { tasks } from "./models/task";

const TasksPage = () => {
  return (
    <div>
      <h3 className="text-lg font-bold mb-2">All Tasks</h3>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex flex-col gap-0.5 max-w-lg">
            <Link href={`/tasks/${task.id}`} className="font-bold">
              {task.title}
            </Link>
            {task.detail && <div className="opacity-70">{task.detail}</div>}
            <div className="flex items-center justify-between gap-4">
              <div>Status: {task.isComplete ? "Complete" : "Incomplete"}</div>
              {task.dueAt && (
                <div>Due at: {new Date(task.dueAt).toLocaleString()}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
