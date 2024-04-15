import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import * as content from "../content/contentExport.js";
import songs from "../data/songListData";

const SongListPage = () => {
  const list = songs[0]; // Accessing the first item in the 'songs' array
  const [songList, setSongList] = useState("");

  // Fetch the text from the songList text file for the current book (file set in the songListData.js file)
  useEffect(() => {
    const fetchSongList = async () => {
      try {
        window.scrollTo({ top: 0, left: 0 });
        console.log("Current list:", list); // Log the value of 'list'
        if (!list) {
          console.error("List not found");
          return;
        }
        const response = await fetch(list.songList);
        if (!response.ok) {
          throw new Error(`Failed to fetch song list: ${response.status} ${response.statusText}`);
        }
        const text = await response.text();
        setSongList(text);
      } catch (error) {
        console.error("Error loading song list:", error);
      }
    };

    fetchSongList();
  }, [list]);

  if (!list) {
    return <div>List not found</div>;
  }

  return (
    <div className="song-list">
      <p style={{ whiteSpace: "pre-line" }} className="song-list">
        {songList}
      </p>
    </div>
  );
};

export default SongListPage;
