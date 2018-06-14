
var playlist = new Object({ Cher: 'Do You Believe In Love After Love'})

function updatePlaylist(obj, name, title ) 
{
Object.assign({}, playlist, { name: [title] })
 return playlist
}

function removeFromPlaylist (obj, name) 
{
 delete obj.name

 return object
}