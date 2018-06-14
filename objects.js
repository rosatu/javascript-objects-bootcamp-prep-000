
var playlist = new Object({ Cher: 'Do You Believe In Love After Love'})

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