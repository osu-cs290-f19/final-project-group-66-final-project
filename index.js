<<<<<<< HEAD
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



var allPosts = [];
var allCities = [];

function handleModalAcceptClick() {

	var description = document.getElementById('post-text-input').value.trim();
	var photoURL = document.getElementById('post-photo-input').value.trim();
	var price = document.getElementById('post-price-input').value.trim();
	var city = document.getElementById('post-city-input').value.trim();
	var condition = document.querySelector('#post-condition-fieldset input:checked').value;

	if (!description || !photoURL || !price || !city || !condition) {
		alert("You must fill in all of the fields!");
	} else {

		allPosts.push({
description: description,
photoURL: photoURL,
price: price,
city: city,
condition: condition
});

clearFiltersAndReinsertPosts();

addCityToAllCities(city);

hideSellSomethingModal();

}

}

//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
function clearFiltersAndReinsertPosts() {

	document.getElementById('filter-text').value = "";


	doFilterUpdate();

}

function showSellSomethingModal() {

	var showSomethingModal = document.getElementById('sell-something-modal');
	var modalBackdrop = document.getElementById('modal-backdrop');

	showSomethingModal.classList.remove('hidden');
	modalBackdrop.classList.remove('hidden');

}


function clearSellSomethingModalInputs() {

	var postTextInputElements = [
		document.getElementById('post-text-input'),
			];

	postTextInputElements.forEach(function (inputElem) {
			inputElem.value = '';
			});
}

function hideSellSomethingModal() {

	var showSomethingModal = document.getElementById('sell-something-modal');
	var modalBackdrop = document.getElementById('modal-backdrop');

	showSomethingModal.classList.add('hidden');
	modalBackdrop.classList.add('hidden');

	clearSellSomethingModalInputs();

}


/*
 * This function creates a new <option> element containing a given city name.

function createCityOption(name) {
	var newCityOption = document.createElement('option');
	newCityOption.textContent = city;
	return newCityOption;
}
*/

function postPassesFilters(post, filters) {

	if (filters.name) {
		var postDescription = post.name.toLowerCase();
		var filterText = filters.name.toLowerCase();
		if (postDescription.indexOf(filterText) === -1) {
			return false;
		}
	}
	return true;

}

function doFilterUpdate() {

	/*
	 * Grab values of filters from user inputs.
	 */
	var filters = {
	name: document.getElementById('filter-text').value.trim(),
      	conditions: []
	}

	var filterConditionCheckedInputs = document.querySelectorAll("#filter-sexuality input:checked");
	for (var i = 0; i < filterConditionCheckedInputs.length; i++) {
		filters.Sexuality.push(filterConditionCheckedInputs[i].value);
	}

	var postContainer = document.getElementById('posts');
	while(postContainer.lastChild) {
		postContainer.removeChild(postContainer.lastChild);
	}

	allPosts.forEach(function (post) {
			if (postPassesFilters(post, filters)) {
			insertNewPost(post.description, post.photoURL, post.price, post.city, post.condition);
			}
			});

}

function parsePostElem(postElem) {

	var post = {
	price: postElem.getAttribute('card-name'),				// ifattribute or getbyclass
       	city: postElem.getAttribute('card-sexuality'),
      	condition: postElem.getAttribute('card-personalInfo-container')
	};

	var postImageElem = postElem.querySelector('.card-image-container img');
	post.photoURL = postImageElem.src;
	post.description = postImageElem.alt;

	var postImageElem = postElem.querySelector('.card-info-container a');  //   a??
	post.photoURL = postImageElem.src;
	post.description = postImageElem.alt;

	return post;

}

window.addEventListener('DOMContentLoaded', function () {

		/*
		 * Remember all of the initial card elements initially displayed in the page.
		 */
		var postElems = document.getElementsByClassName('card');
		for (var i = 0; i < postElems.length; i++) {
		allPosts.push(parsePostElem(postElems[i]));
		}

		/*
		 * Grab all of the sexuality names already in the filter dropdown.
		 */
		var filterCitySelect = document.getElementById('filter-sexuality');
		if (filterCitySelect) {
		var filterCityOptions = filterCitySelect.querySelectorAll('option:not([selected])');
		for (var i = 0; i < filterCityOptions.length; i++) {
		allCities.push(filterCityOptions[i].value.trim().toLowerCase());
		}
		}

		var sellSomethingButton = document.getElementById('add_people_button');
		if (sellSomethingButton) {
			sellSomethingButton.addEventListener('click', showSellSomethingModal);
		}

		var modalAcceptButton = document.getElementById('modal-accept');
		if (modalAcceptButton) {
			modalAcceptButton.addEventListener('click', handleModalAcceptClick);
		}

		var modalHideButtons = document.getElementsByClassName('modal-hide-button');
		for (var i = 0; i < modalHideButtons.length; i++) {
			modalHideButtons[i].addEventListener('click', hideSellSomethingModal);
		}

		var filterUpdateButton = document.getElementById('filter-update-button');
		if (filterUpdateButton) {
			filterUpdateButton.addEventListener('click', doFilterUpdate)
		}

});
=======
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
>>>>>>> 68a9f5739b9493d2a1c519d79bd4f7a413f1747d
