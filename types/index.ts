export type Task = {
  id:string,
  content: string;
  creationTimestamp?: number;
  isCompleted: boolean;
  isDeleted: boolean,
};