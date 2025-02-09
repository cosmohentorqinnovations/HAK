import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import UploadFile from "./components/UploadFile";
import FileList from "./components/FileList";

const App = () => {
  return (
    <div className="container mx-auto text-center p-10">
      <h1 className="text-4xl font-bold mb-4">🚀 HAK Cloud</h1>
      <UploadFile />
      <FileList />
    </div>
  );
};

export default App;
