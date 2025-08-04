export interface Task {
  id: string;
  title: string;
  detail?: string;
  isComplete: boolean;
  dueAt?: string;
}

// placeholder data
export const tasks: Task[] = [
  {
    id: "1",
    title: "Task 1",
    detail: "This is the first task.",
    isComplete: false,
    dueAt: "2023-10-01T12:00:00Z",
  },
  {
    id: "2",
    title: "Task 2",
    isComplete: true,
  },
  {
    id: "3",
    title: "Task 3",
    detail: "This is the third task.",
    isComplete: false,
    dueAt: "2023-10-05T15:30:00Z",
  },
];
