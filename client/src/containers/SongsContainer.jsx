var React = require('react');

var SongList = require('../components/SongList.jsx');


var SongContainer = React.createClass({
  getInitialState: function() {
    return {
      songs: []
    };
  },

  componentDidMount: function(){
    var url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200){
        var data = JSON.parse(request.responseText);
        this.setState({ songs: data.feed.entry});
      }
    }.bind(this);
    request.send(null);

  },

render: function() {
  return (
    <div className="songContainer">
      <h1>UK Top 20</h1>
      <SongList songs={this.state.songs} />
  
     
    </div>

    );
}

});





module.exports = SongContainer;