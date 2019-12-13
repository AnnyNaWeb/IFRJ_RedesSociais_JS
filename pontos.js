var pointScore = 0;
var timeScore = 0;

function CarregaScore() {
  $('.button, .score, .leaderboard').hide();
  
  FBInstant.initializeAsync().then(function() {
    FBInstant.startGameAsync().then(function() {
      $('.button, .score, .leaderboard').show();
      var contextId = FBInstant.context.getID();
        console.log(contextId);
      // Both leaderboard names need to be configured on the 
      // app dashboard first. If the names passed here 
      // are not found in your app's configuration, the promise 
      // will reject
      FBInstant.getLeaderboardAsync('All Friends')
        .then(function(leaderboard){
          return leaderboard.getEntriesAsync();
        })
        .then(function(entries){
          populateLeaderboard(entries, 'ul-score-leaderboard');
        })
        .catch(function(error) {
          $('#error-messages').html('Leaderboard "All Friends" not found in app configuration')
        });
 

    });
  });
};