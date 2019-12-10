
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
//------------------------------------------
var allContent = [];
var allSex = [];

/*  This for handlebars files
function insertNew(name,Sexuality,emailURL,phone,blogURL){
	var personCard = Handlebars.templages.item({
		name:name,
		Sexuality:Sexuality,
		emailURL:emailURL,
		phone:phone,
		blogURL:blogURL		
	})
	var personContainer = document.getElementById('content');
	personContainer.insertAdjacentHTML('beforeend'personCard);
}
*/

//~~~~~
//Cehck wheter all of required inputs were supplied
function handleModalAcceptClick() {

	var name = document.getElementById('post-name-input').value.trim();
	var photo = document.getElementById('post-photo-input').value.trim();
	var emailURL = document.getElementById('post-blog-input').value.trim();
	var phone = document.getElementById('post-phone-input').value.trim();
	var Sexuality = document.querySelector('selected value').value;		//??

	if (!name || !emailURL || !photo || !phone || !Sexuality) {
		alert("You must fill in all of the fields!");
	} else {

		allPosts.push({
			name:name,
			Sexuality:Sexuality,
			emailURL:emailURL,
			phone:phone,
			blogURL:blogURL		
		});

		clearFiltersAndReinsertPosts();	

		hideSellSomethingModal();
	}
}

//~~~~~
//Clears all filter values
function clearFiltersAndReinsertPosts() {

	document.getElementById('filter-text').value = "";

	doFilterUpdate();	

}

//~~~~~
//Show the add person modal
function showSellSomethingModal() {

	var showSomethingModal = document.getElementById('add-something-button');
	var modalBackdrop = document.getElementById('modal-backdrop');

	showSomethingModal.style.display = 'block';
	//showSomethingModal.classList.remove('hidden');
	//modalBackdrop.classList.remove('hidden');
	modalBackdrop.style.display = 'block';

}

//~~~~~
//Clear any user-entered inputs
function clearSellSomethingModalInputs() {

	var postTextInputElements = [
		document.getElementById('post-text-input'),
			];

	postTextInputElements.forEach(function (inputElem) {
			inputElem.value = '';
			});
}

//~~~~~
//Hide the add person modal
function hideSellSomethingModal() {

	var showSomethingModal = document.getElementById('add-something-button');
	var modalBackdrop = document.getElementById('modal-backdrop');

	showSomethingModal.classList.add('hidden');
	modalBackdrop.classList.add('hidden');

	clearSellSomethingModalInputs();

}
/*?? Or will not use this
function postPassesFilters(post, filters) {

	if (filters.name) {
		var postDescription = post.name.toLowerCase();
		var filterText = filters.name.toLowerCase();
		if (postDescription.indexOf(filterText) === -1) {
			return false;
		}
	}
	return true;

}*/


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

	var postContainer = document.getElementById('people-cards');
	while(postContainer.lastChild) {
		postContainer.removeChild(postContainer.lastChild);
	}

	allPosts.forEach(function (post) {
			if (postPassesFilters(post, filters)) {
				insertNew(name,Sexuality,emailURL,phone,blogURL);
			}
			});

}

function parsePostElem(postElem) {

	var post = {
		name: postElem.getAttribute('card-name'),				// ifattribute or getbyclass
       		Sexuality: postElem.getAttribute('card-sexuality'),
      		phone: postElem.getAttribute('card-phone-number'),
      		emailURL: postElem.getAttribute('card-email'),
	};

	var postImageElem = postElem.querySelector('.card-image-container img');
		post.photoURL = postImageElem.src;
		post.description = postImageElem.alt;

	return post;

}

//~~~~~
//Wait until the DOM content is loaded
var postElems = document.getElementsByClassName('card');
for (var i = 0; i < postElems.length; i++) {
	allPosts.push(parsePostElem(postElems[i]));
}

/*
 * Grab all of the sexuality names already in the filter dropdown.

 var filterCitySelect = document.getElementById('filter-sexuality');
 if (filterCitySelect) {
 var filterCityOptions = filterCitySelect.querySelectorAll('option:not([selected])');
 for (var i = 0; i < filterCityOptions.length; i++) {
 allCities.push(filterCityOptions[i].value.trim().toLowerCase());
 }
 }*/


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












































