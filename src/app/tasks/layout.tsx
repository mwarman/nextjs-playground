import Link from 'next/link';

const TaskLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-8 items-baseline mb-4">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/tasks">List</Link>
            </li>
            <li>
              <Link href="/tasks/new">New</Link>
            </li>
          </ul>
        </nav>
      </div>
      <section>{children}</section>
    </div>
  );
};

export default TaskLayout;
