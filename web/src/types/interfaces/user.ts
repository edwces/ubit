export interface UserAvatar {
  path: string;
  name: string;
  url: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: UserAvatar;
  role: number;
}
