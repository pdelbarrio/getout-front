import React, { useState } from "react";

const SpotImageUpload = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "getoutpreset");
    data.append("cloud_name", "getoutbcn");

    fetch("https://api.cloudinary.com/v1_1/getoutbcn/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  //TODO: METER LA URL en el campo Image, mirar errores de tipado y tamaño y ubicación de la imagen
  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1></h1>
        <img src={url} />
      </div>
    </div>
  );
};
export default SpotImageUpload;
