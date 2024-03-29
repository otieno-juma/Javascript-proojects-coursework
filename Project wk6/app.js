const alert = document.querySelector('.alert');
const form = document.querySelector('.shopping-form');
const shopping = document.getElementById('shopping');
const submitButton = document.querySelector('.submit-button');
const container = document.querySelector('.shopping-container');
const list = document.querySelector('.shopping-list');

// ediit option
let editElement;
let editFlag = false;
let editID = "";
// EVENT LISTENERS
form.addEventListener("submit", addItem);

// FUNCTIONS
function addItem(e) {
    e.preventDefault();
    const value = shopping.value;

    const id = new Date().getTime().toString();
    if (value && !editFlag) {
        const element = document.createElement("article");
        element.classList.add("shopping-item");

        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
                <div class="button-container">
                    <button type="button" class="edit-button">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="delete-button">
                        <i class="fas fo-trash"></i> 
                    </button>
                </div>`;

        list.appendChild(element);
        displayAlert("Commodity added to the list", "success");
        // show container
        container.classList.add("show-container");
    }else if (value && editFlag){
        console.log("editing");
    }else {
        displayAlert("Enter Value", "danger");
    }
}

// display alert
function displayAlert(text, action){
    alert.textcontent = text;
    alert.classList.add(`alert-${action}`);
}

// clear items
function clearItems (){
    const items = document.querySelectorAll('.shopping-item');

    if(items.lenngth > 0) {
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
}