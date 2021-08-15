import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-song">
                {songs.map((song) => (
                    <LibrarySong
                        song={song}
                        songs={songs}
                        setCurrentSong={setCurrentSong}
                        id={song.id}
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
