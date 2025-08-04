import Link from "next/link";

import { tasks } from "./models/task";

const TasksPage = () => {
  return (
    <div>
      <h1>All Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2>
              <Link href={`/tasks/${task.id}`}>{task.title}</Link>
            </h2>
            {task.detail && <p>{task.detail}</p>}
            <p>Status: {task.isComplete ? "Complete" : "Incomplete"}</p>
            {task.dueAt && (
              <p>Due at: {new Date(task.dueAt).toLocaleString()}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
