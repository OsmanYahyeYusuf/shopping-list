const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');


function addItem(e){
  e.preventDefault();
  const createItem = itemInput.value;
  //valid addItem
  if(createItem === ''){
    alert('Pls add Item')
  }

  //add item
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(createItem))
  const button = creatButton('remove-item btn-link text-red');
  li.appendChild(button)
  
  itemList.appendChild(li);
  createItem.value = '';
}
function creatButton(classes){
  const button = document.createElement('button')
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button;
}

function createIcon (classes){
  const icon = document.createElement('i')
  icon.className = classes;
  return icon;
}


//Add Event listner

itemForm.addEventListener("submit", addItem)

