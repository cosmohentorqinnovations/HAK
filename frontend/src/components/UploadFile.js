import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Select a file first!");
    const { data, error } = await supabase.storage
      .from("uploads")
      .upload(file.name, file);

    if (error) {
      alert("Upload failed!");
    } else {
      alert("File uploaded successfully!");
      window.location.reload();
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button className="bg-blue-500 px-4 py-2 rounded mt-3" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default UploadFile;
