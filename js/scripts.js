var list = document.getElementById('newList');
	add = document.getElementById('addElem');

add.addEventListener('click', function() {
	list.innerHTML += '<li>item ' + document.getElementsByTagName('li').length + '</li>';
});
