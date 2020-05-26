import React,{ useState, useEffect} from 'react';
import NewSongForm from './NewSongForm';
import { uuid } from 'uuidv4';

const SongList = () => {

    const [songs,setSongs] = useState([
        { id: 1, title: 'first title'},
        { id: 2, title: 'second title'},
        { id: 3, title: 'third title'},
    ]);
    const [age,setAge]= useState(20);

    const addSong = (title) =>{
        setSongs([...songs, { id: uuid(), title}])
    }
    useEffect(()=>{
        console.log('useEffect hook',songs)
    },[songs])
    return ( 
        <div className="song-list">
            <ul>
                {songs.map(song=>{
                    return(
                        <li key={song.id}>{song.title}</li>
                    )
                })}
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={()=>{setAge(age+1)}}>Add 1 to age : {age}</button>
        </div>
     );
}
 
export default SongList;