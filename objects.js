var playlist = { Sia: 'I\'m alive'}

function updatePlaylist(obj, name, title ) 
{
 return Object.assign({}, obj, {[name]:title})
}

function removeFromPlaylist (obj, name) 
{
 delete obj.name

 return object
}