import React from 'react';
import './Track.css';


function Track(props){
    const addTrack = () => {
        props.onAdd(props.track);
    }
    const removeTrack = () => {
        props.onRemove(props.track);
    }
    const renderAction = () => {
        if(props.isRemoval){
            return <button className='Track-action' onClick={removeTrack}>-</button>
        } else {
            return <button className='Track-action' onClick={addTrack}>+</button>
        }
    }
    return (
        <div className="Track">
            <a href={props.track.external_urls} target="_blank"><img className="albumIMG" src={props.track.image}></img></a>
            <div className="Track-information">
                <h3><a href={props.track.external_urls} target="_blank">{props.track.name}</a></h3>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
                <p>popularity - {props.track.popularity}</p>
                <audio controls="controls" controlsList="nodownload">
                    <source src={props.track.preview_url} type="audio/mpeg"/>
                </audio>
            </div>
            {renderAction()}
        </div>
    )
}


// class Track extends React.Component {
//     constructor(props){
//         super(props);

//         this.addTrack = this.addTrack.bind(this);
//         this.removeTrack = this.removeTrack.bind(this);
//     }


//     addTrack(){
//         this.props.onAdd(this.props.track);
//     }

//     removeTrack(){
//         this.props.onRemove(this.props.track);
//     }


//     renderAction(){
//         if(this.props.isRemoval){
//             return <button className='Track-action' onClick={this.removeTrack}>-</button>
//         } else {
//             return <button className='Track-action' onClick={this.addTrack}>+</button>
//         }
//     }

//     render(){
//         return (
//             <div className="Track">
//                 <a href={this.props.track.external_urls} target="_blank"><img className="albumIMG" src={this.props.track.image}></img></a>
//                 <div className="Track-information">
//                     <h3><a href={this.props.track.external_urls} target="_blank">{this.props.track.name}</a></h3>
//                     <p>{this.props.track.artist}</p>
//                     <p>{this.props.track.album}</p>
//                     <p>popularity - {this.props.track.popularity}</p>
//                     <audio controls="controls" controlsList="nodownload">
//                         <source src={this.props.track.preview_url} type="audio/mpeg"/>
//                     </audio>
//                 </div>
//                 {this.renderAction()}
//             </div>
//         )
//     }
// }

export default Track;