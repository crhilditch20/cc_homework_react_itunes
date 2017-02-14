var React = require('react');


var SongList = function(props) {

  var options = props.songs.map(function(song, index){
    return (
     <ul>
     <li value={index} key={song["im:name"].label}>No.{index+1}</li>
    <li value={index} key={index}>Title:{song["im:name"].label}</li>
    <li value={index} key={song.title.label}>Artist:{song["im:artist"].label}</li>
    </ul>
      );

  });
  return (
    <div id="song-list">
    {options}
    </div>
    )
};



module.exports = SongList;