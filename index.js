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

//-----------------Add new item!
//
//
//Open the page when the user click the plus samble
var sellbutton = document.getElementById('add_people_button');
var backdrop = document.getElementById('modal-backdrop');
var sellmodal = document.getElementById('add-something-modal');

sellbutton.addEventListener('click',  function sell(Event){
	sellmodal.style.display = 'block';
	backdrop.style.display = 'block';
});

//For close the second page or cancel items
var modalclose = document.getElementById('modal-close');
var modalcancel = document.getElementById('modal-cancel');

modalclose.addEventListener('click',  function sell(Event){
	clear();
})
modalcancel.addEventListener('click',  function sell(Event){
//	clear();
	sellmodal.style.display = 'none';
	backdrop.style.display = 'none';
})


//Get the information of user wanna input]
//
var potext = document.getElementById('post-name-input');
var posex = document.getElementById('post-gender');
var pophoto = document.getElementById('post-photo-input');
var poblog = document.getElementById('post-blog-input');
//var pophone = document.getElementById('post-phone-input');

var potextwords = 0;
var posexwords = 0;
var pophotowords = 0;
var poblogwords = 0;
var pophonewords = 0;

potext.addEventListener('change',function listener(event){
	potextwords = event.currentTarget.value;
	event.stopPropagation();
});

posex.addEventListener('change',function listener(event){
	posexwords = event.currentTarget.value;
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

/*pophone.addEventListener('change',function listener(event){
	pophonewords = event.currentTarget.value;
	event.stopPropagation();
});*/


//Create a new item process
var main = document.getElementById('people-cards');
var accept = document.getElementById('modal-accept');

accept.addEventListener('click',function sell(event){
	if(potextwords == 0 || posexwords ==0 || pophotowords == 0 || poblogwords == 0){
		alert("Ha? Can you input all of it?");
	}else{
    var newpo = document.createElement('div');      //card

    var imagcontainer = document.createElement('div');
    var infocontainer = document.createElement('div');

    var img = document.createElement('div');   //photo

		var span1 = document.createElement('span');
		var span2 = document.createElement('span');
		var span3 = document.createElement('span');
		var span4 = document.createElement('span');

  	var blog = document.createElement('a');

		newpo.classList.add('card');

		imagcontainer.classList.add('card-image-container');
		infocontainer.classList.add('card-info-container');
		blog.classList.add('card-blog');
		span1.classList.add('card-name');
		span2.classList.add('card-sexuality');
    span3.classList.add('card-email');
		span4.classList.add('card-phone-number');

		img.src = pophotowords;
		img.alt = potextwords;

		blog.textContent = poblogwords;
		span1.textContent = potextwords;
		span2.textContent = posexwords;
    span3.textContent = poblogwords;
		span4.textContent = pophonewords;

		imagcontainer.appendChild(img);

		infocontainer.appendChild(span1);
		infocontainer.appendChild(span2);
  	infocontainer.appendChild(span3);
		infocontainer.appendChild(span4);
  	infocontainer.appendChild(blog);

		newpo.appendChild(imagcontainer);
		newpo.appendChild(infocontainer);

		main.appendChild(newpo);
		clear();
		sellmodal.style.display = 'none';
	}
});


//Clear function for clear the input page
function clear(){
	potext.value = '';
	posex.value = '';
	pophoto.value = '';
	poblog.value = '';
//	pophone.value = '';

	sellmodal.style.display = 'none';
	backdrop.style.display = 'none' ;
}
