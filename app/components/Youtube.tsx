"use client";
import React, { useState } from "react";

const Youtube = () => {
  const [url, setUrl] = useState<string>("");
  const [videoId, setVideoId] = useState<string>("");
  const [render, setRender] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex gap-3 items-center">
        <input
          type="text"
          className="w-full bg-transparent border-2 border-white/40 rounded-lg p-4"
          placeholder="Enter Youtube URL"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
            const videoId = e.target.value.split("v=")[1];
            setVideoId(videoId);
          }}
        />
        <button className=" bg-white p-2 text-black rounded-lg" onClick={(e)=> setRender(true)}>Import </button>
      </div>
      {videoId && render && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          className=" rounded-lg lg:w-[600px] lg:h-[300px] h-64"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Youtube;
