export type Spot = {
  _id: string;
  name: string;
  description: string;
  images: string;
  website: string;
  validated: boolean;
  category: string;
  location: string;
  uploader: {
    id: string;
    username: string;
  };
  //   likes: [];
};

export type SpotFormValues = Omit<
  Spot,
  "uploader" | "validated" | "images" | "_id"
>;
