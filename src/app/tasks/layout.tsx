import Link from "next/link";

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <nav>
        <ul>
          <li>
            <Link href="/tasks">All Tasks</Link>
          </li>
          <li>
            <Link href="/tasks/new">New Task</Link>
          </li>
        </ul>
      </nav>
      <section>{children}</section>
    </div>
  );
};

export default TaskLayout;
