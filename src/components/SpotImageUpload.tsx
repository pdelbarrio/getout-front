import { useState } from "react";

export type Props = {
  updateImage: (arg: string) => void;
};

const SpotImageUpload = ({ updateImage }: Props) => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "spotspreset");
    data.append("cloud_name", "getoutbcn");

    fetch("https://api.cloudinary.com/v1_1/getoutbcn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
        updateImage(data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div>
          <h1></h1>
          {/* <img src={url} /> */}
        </div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
    </div>
  );
};
export default SpotImageUpload;
