export interface Message {
  id: string;
  summary: string;
  user: User
}

interface User {
  firstName: string;
  lastName: string;
  picture: string;
}