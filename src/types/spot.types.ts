export type Spot = {
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

export type SpotFormValues = Omit<Spot, "uploader" | "validated" | "images">;
