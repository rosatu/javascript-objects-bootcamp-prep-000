
var playlist = new Object({ artistName: songTitle })

function updatePlaylist(obj, artistName, songTitle ) 
{
 return 
 Object.assign({}, obj, {[artistName]:songTitle})
}

function removeFromPlaylist (obj, name) 
{
 delete obj.name

 return object
}