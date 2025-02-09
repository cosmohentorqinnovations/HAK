import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const { data, error } = await supabase.storage.from("uploads").list();
      if (!error) setFiles(data);
    };
    fetchFiles();
  }, []);

  const handleDelete = async (fileName) => {
    await supabase.storage.from("uploads").remove([fileName]);
    alert("File deleted!");
    window.location.reload();
  };

  return (
    <div className="mt-5">
      <h2 className="text-2xl">Uploaded Files:</h2>
      <ul>
        {files.map((file) => (
          <li key={file.name} className="flex justify-between">
            {file.name}
            <button className="bg-red-500 px-2 py-1" onClick={() => handleDelete(file.name)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileList;
