import React from "react";

const UploadBox = () => {
  return (
    <>
      <h1>PCOS Detection</h1>
      <form action="/predict" method="post" enctype="multipart/form-data">
        <input type="file" name="file" accept=".jpg, .jpeg, .png" required />
        <button type="submit">Predict</button>
      </form>
    </>
  );
};

export default UploadBox;
