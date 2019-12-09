var text = document.getElementById('filter-text');
var textContent = 0;
text.addEventListener('change', function listener(event) {
    textContent = event.currentTarget.value;
    textContent = textContent.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
    console.log('== textContent: ', textContent);
    event.stopPropagation();
});

var inputGender = document.getElementById('filter-sexuality');

var updateButton = document.getElementById('filter-update-button');
updateButton.addEventListener('click',  function (event){
	// if user click update button, this function will be triggered which will sort items on the right due to things userd entered
	var items = document.getElementsByClassName('card');
    var names = document.getElementsByClassName('card-name');
    var genders = document.getElementsByClassName('card-sexuality');
	if(textContent !== 0){
		for(var i = 0; i < items.length; i++){
			var name = names[i].textContent;
			name = name.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase();
			if(name.indexOf(textContent) == -1){
				items[i].parentNode.removeChild(items[i]);
				i--;
			}
		}
    }
    if(inputGender.value == "Male"){
        for(var i = 0; i < items.length; i++){
            var gender = genders[i].textContent;
			if(gender ===  "Gender: Female"){
				items[i].parentNode.removeChild(items[i]);
				i--;
			}
		}
    }else if(inputGender.value == "Female"){
        for(var i = 0; i < items.length; i++){
			var gender = genders[i].textContent;
			if(gender ===  "Gender: Male"){
				items[i].parentNode.removeChild(items[i]);
				i--;
			}
		}
    }

    event.stopPropagation();
})