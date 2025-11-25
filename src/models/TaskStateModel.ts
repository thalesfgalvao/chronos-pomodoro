import type { TaskModel } from './TaskModel';

export interface TaskStateModel {
  tasks: TaskModel[];
  secondsRemainig: string;
  formattedSecondsRemaining: number;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
}
