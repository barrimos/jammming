import React from 'react';
import { useState } from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';


function Playlist(props){
    const [newPlaylist, setNewPlaylist] = useState("New Playlist");

    const handleNameChange = (e) => {
        setNewPlaylist(e.target.value);
    }
    return (
        <div className="Playlist">
            <input defaultValue={newPlaylist} onChange={handleNameChange}/>
            <TrackList
                tracks={props.playlistTracks}
                onRemove={props.onRemove}
                isRemoval={true}
            />
            <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    )
}

// class Playlist extends React.Component {
//     constructor(props){
//         super(props);

//         this.handleNameChange = this.handleNameChange.bind(this);
//     }

//     handleNameChange(e){
//         this.props.onNameChange(e.target.value)
//     }

//     render(){
//         return (
//             <div className="Playlist">
//                 <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
//                 <TrackList
//                     tracks={this.props.playlistTracks}
//                     onRemove={this.props.onRemove}
//                     isRemoval={true}
//                 />
//                 <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
//             </div>
//         )
//     }
// }

export default Playlist;