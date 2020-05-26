import React,{useState} from 'react';
import { uuid } from 'uuidv4';

const SongList = () => {

    const [songs,setSongs] = useState([
        { id: 1, title: 'first title'},
        { id: 2, title: 'second title'},
        { id: 3, title: 'third title'},
    ]);
    const addSong=()=>{
        setSongs([...songs,{ id: uuid(), title: 'new song'}])
    }
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <button onClick={addSong}>Add song</button>
        </div>
     );
}
 
export default SongList;