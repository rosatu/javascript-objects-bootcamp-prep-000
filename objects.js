
var playlist = new Object({ Cher: 'Do You Believe In Love After Love'})

function updatePlaylist(obj, artist, song) 
{
obj[artist] = song

 return obj
}

var playlist = new Object({ Cher: 'Do You Believe In Love After Love'})
 

function removeFromPlaylist (obj, artist) 
{

delete obj.artist

return [obj]

}
