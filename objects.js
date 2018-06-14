
var playlist = new Object({ Cher: 'Do You Believe In Love After Love'})

function updatePlaylist(obj, artist, song) 
{
obj[artist] = song

 return obj
}

function removeFromPlaylist (playlist, artist) 
{
 delete playlist.artist

 return playlist
}