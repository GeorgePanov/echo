export enum ROUTE_PATH {
  MAIN = '/echo/',
  // EMAIL = '/echo/email/',
  // EMAIL_ID = '/echo/email/:id/',
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
