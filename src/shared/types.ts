export enum ROUTE_PATH {
  MAIN = '/echo/',
  CASE = '/echo/case/',
  PROFILE = '/echo/profile/',
}

export type emailType = {
  emailId: number;
  isRead: boolean;
  title: string;
  author: string;
  message: string;
};

export const CLUE_SOLVED_KEY = 'clue_solved_at';
