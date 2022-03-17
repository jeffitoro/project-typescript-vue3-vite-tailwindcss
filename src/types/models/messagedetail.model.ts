export interface MessageDetail {
  id: string;
  user: User;
  summary: string;
  text: string;
}

interface User {
  name: Name;
  email: string;
  picture: Picture;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}