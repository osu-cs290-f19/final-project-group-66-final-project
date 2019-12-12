var filterImage = document.getElementById('filter-img');
var filter = document.getElementById('filter-body-container');
filterImage.addEventListener('click', function (event) {
	if(filter.style.display != 'block'){
		filter.style.display = 'block';
	}
	else{
		filter.style.display = 'none';
	}
});

var postEmailInput = document.getElementById('post-email-input');
var postEmailInputContent = 0;
postEmailInput.addEventListener('change', function(event){
	postEmailInputContent = postEmailInput.textContent;
});

var postTelephoneInput = document.getElementById('post-telephone-input');
var postTelephoneInputContent = 0;
postTelephoneInput.addEventListener('change', function(event){
	postTelephoneInputContent = postTelephoneInput.textContent;
});

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

//-----------------Add new item Section!
//
//
//
//
//
//
//
//Open the page when the user click the plus samble
//
//
//
var sellbutton = document.getElementById('add_people_button');
var backdrop = document.getElementById('modal-backdrop');
var sellmodal = document.getElementById('add-something-modal');

sellbutton.addEventListener('click',  function sell(Event){
	sellmodal.style.display = 'block';
	backdrop.style.display = 'block';
});

//For close the second page or cancel items
//
//
//
var modalclose = document.getElementById('modal-close');
var modalcancel = document.getElementById('modal-cancel');

modalclose.addEventListener('click',  function sell(Event){
	clear();
})
modalcancel.addEventListener('click',  function sell(Event){
	clear();
	sellmodal.style.display = 'none';
	backdrop.style.display = 'none';
})


//Clear function for clear the input page
function clear(){
	potext.value = '';
	posex.value = '';
	pophoto.value = '';
	poblog.value = '';
	postEmailInput.value = '';
	postTelephoneInput.value = '';
//	pophone.value = '';

	sellmodal.style.display = 'none';
	backdrop.style.display = 'none' ;
}



//Get the information of user input
//


var potext = document.getElementById('post-name-input');
var posex = document.getElementById('post-gender');
var pophoto = document.getElementById('post-photo-input');
var poblog = document.getElementById('post-blog-input');
var pophone = document.getElementById('post-telephone-input');
var mail = document.getElementById('post-email-input');

var potextwords = 0;
var pophotowords = 0;
var poblogwords = 0;
var pophonewords = 0;
var mailwords = 0;
var posexwords = 0;

posex.addEventListener('click',function listener(event){
	posexwords = event.currentTarget.value;
	event.stopPropagation();
});

potext.addEventListener('change',function listener(event){
	potextwords = event.currentTarget.value;
	event.stopPropagation();
});

pophoto.addEventListener('change',function listener(event){
	pophotowords = event.currentTarget.value;
	event.stopPropagation();
});


poblog.addEventListener('change',function listener(event){
	poblogwords = event.currentTarget.value;
	event.stopPropagation();
});

pophone.addEventListener('change',function listener(event){
	pophonewords = event.currentTarget.value;
	event.stopPropagation();
});

mail.addEventListener('change',function listener(event){
	mailwords = event.currentTarget.value;
	event.stopPropagation();
});

//Create a new item process
var main = document.getElementById('people-cards');
var accept = document.getElementById('modal-accept');

accept.addEventListener('click',function sell(event){
	if(potextwords == 0 || pophotowords == 0 || poblogwords == 0 || posexwords == 0 || mailwords == 0 || pophonewords == 0){
		alert("Ha? Can you input all of it?");
	}else{
		var postDataHTML = Handlebars.templates.post({
			description: potextwords,
			photoURL: pophotowords,
			blog: poblogwords,
			gender: posexwords,
			email: mailwords,
			tel: pophonewords
		});
		main.insertAdjacentHTML('beforeend', postDataHTML);
		clear();
		sellmodal.style.display = 'none';
	}
});


var red = document.getElementById('background-red');
var white = document.getElementById('background-white');
var pink = document.getElementById('background-pink');
var green = document.getElementById('background-green');
var blue = document.getElementById('background-blue');

var filterContainer = document.getElementsByClassName('filter-container')[0];
var section = document.getElementById('people-cards');
red.addEventListener('click',function (event){
	filterContainer.style.backgroundColor = "red";
	section.style.backgroundColor = "red";
});

white.addEventListener('click',function (event){
	filterContainer.style.backgroundColor = "white";
	section.style.backgroundColor = "white";
});

pink.addEventListener('click',function (event){
	filterContainer.style.backgroundColor = "pink";
	section.style.backgroundColor = "pink";
});

green.addEventListener('click',function (event){
	filterContainer.style.backgroundColor = "green";
	section.style.backgroundColor = "green";
});

blue.addEventListener('click',function (event){
	filterContainer.style.backgroundColor = "rgb(6, 215, 243)";
	section.style.backgroundColor = "rgb(6, 215, 243)";
});