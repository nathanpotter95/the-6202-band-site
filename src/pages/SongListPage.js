import React, { useState, useEffect } from "react";
import { SongList } from "../content/contentExport.js";

const SongListPage = () => {
  const songs = SongList;
  const [list, setList] = useState("");

  // useEffect(() => {
  //   // Split the content of the song list by newline character to get an array of songs
  //   const songs = fetch(SongList);
  //   setList(songs);
  // }, []);

  useEffect(() => {
    const fetchSongList = async () => {
      try {
        window.scrollTo({ top: 0, left: 0 });
        const response = await fetch(list);
        const text = await response.text();
        setList(text);
      } catch (error) {
        console.error("Error loading songs:", error);
      }
    };

    fetchSongList();
  }, [songs]);

  return (
    <div>
      <p style={{ whiteSpace: "pre-line" }} className="song-list">
        {list}
      </p>
    </div>
  );
};

export default SongListPage;
