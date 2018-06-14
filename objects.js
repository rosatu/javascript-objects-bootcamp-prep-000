var playlist = new Object()

var playlist = new Object({ Sia: 'I\'m alive'})

function updatePlaylist(playlist, name, title ) 
{
 return 
 Object.assign({}, playlist, {[name]:title})
}

function removeFromPlaylist (obj, name) 
{
 delete obj.name

 return object
}