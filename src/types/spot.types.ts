export type Spot = {
  _id: string;
  name: string;
  description: string;
  image: string;
  website: string;
  validated: boolean;
  category: string;
  location: string;
  uploader: {
    _id: string;
    username: string;
    email: string;
    avatar: string;
    isAdmin: boolean;
    spots?: string[];
    favSpots?: string[];
    createdAt: string;
    updatedAt: string;
  };
  likes?: string[];
  createdAt: string;
  updatedAt: string;
};

export type SpotFormValues = Omit<
  Spot,
  "uploader" | "validated" | "images" | "_id"
>;
