import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mspijtqhhxofxrjojgww.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zcGlqdHFoaHhvZnhyam9qZ3d3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwOTE5NTUsImV4cCI6MjA1NDY2Nzk1NX0.RAyGzLezzorglYfwibzDvY2Uzr1liR4QNAke-lKeO5g";
const supabase = createClient(supabaseUrl, supabaseKey);

function App() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    const { data, error } = await supabase.storage
      .from("hak-cloud")
      .upload(file.name, file);

    setUploading(false);
    if (error) {
      alert("Upload failed!");
      console.error(error);
    } else {
      alert("Upload successful!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>HAK Cloud</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload File"}
      </button>
    </div>
  );
}

export default App;
