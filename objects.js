
var playlist = new Object({ 'Will Smith': 'Gettin Jiggy With It'})

function updatePlaylist(obj, name, title ) 
{
 return 
 Object.assign({}, obj, {[name]:title})
}

function removeFromPlaylist (obj, name) 
{
 delete obj.name

 return object
}