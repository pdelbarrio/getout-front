export type User = {
  avatar: string;
  email: string;
  username: string;
  _id: string;
  spots?: string[];
  favSpots?: string[];
  role: string;
};

export type UserData = {
  token: string | null;
  user: User | null;
};
