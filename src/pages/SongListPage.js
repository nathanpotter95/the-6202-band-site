import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import lists from "../data/songListData";

const SongListPage = () => {
  // Currently collecting the song list from songListData, which collects from contentExport.js, which collects from song-list.txt
  // Consider figuring out simplifying with less routing and ridding 'lists' array in songListData
  const list = lists[0]; // Accessing the first item in the 'lists' array
  const [songList, setSongList] = useState("");

  // Fetch the text from the songList text file for the current list (file set in the songListData.js file)
  // Without this, page won't load the song-list.txt correctly
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
    <div className="song-list-page">
      <div className="song-list-header">
        <h1>Current Song List</h1>
        <h2>
          This list is ever changing and expanding. We generally have a handful songs 'in the works'
          to keep this list growing.
          <br />
          <br />
          If you have a song you'd like to hear us play, reach out and let us know!
        </h2>
      </div>
      <p style={{ whiteSpace: "pre-line" }} className="song-list">
        {songList}
      </p>
    </div>
  );
};

export default SongListPage;
