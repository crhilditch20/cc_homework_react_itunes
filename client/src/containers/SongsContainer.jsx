var React = require('react');

var SongList = require('../components/SongList.jsx');
var SongDetails = require('../components/SongDetails.jsx');


var SongContainer = React.createClass({
  getInitialState: function() {
    return {
      songs: [],
      selectedSong: null,
    };
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({ songs: data.feed.entry, selectedSong: data.feed.entry[0] });
      }
    }.bind(this);
    request.send(null);

  },

  setSelectedSong: function(song){
    this.setState({selectedSong: song});
  },

render: function() {
  return (
    <div className="songContainer">
      <h1>UK Top 20</h1>
     
    </div>

    );
}

});
// <FilmSelector films={this.state.films} selectFilm={this.setSelectedFilm} />
// <FilmDetail film={this.state.selectedFilm}/>
// <button onClick={this.getActors}>Click to get Lead Actor's Films</button>
// <ActorFilms films={this.state.actorFilms} />


module.exports = SongContainer;