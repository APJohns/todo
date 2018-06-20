const listItems = document.querySelectorAll('li');

listItems.forEach(item => {
	item.addEventListener('click', () => {
		if(item.nextSibling.checked) {
			item.style.textDecoration = 'none';
			item.nextSibling.checked = false;
		} else {
			item.style.textDecoration = 'line-through';
			item.nextSibling.checked = true;
		}
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(this.responseText);
			}
		}

		xhttp.open("POST", "/update", true);
		xhttp.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
		xhttp.send(JSON.stringify({
			id: item.id,
			done: item.nextSibling.checked
		}));
	});
});
