var ul = document.getElementById('list');
var li;
let todosListData =[];


// -------------------------------------------------------------------------------------
const updateLSData = () =>{
    const todoData = document.getElementById('input').value;
    console.log(todoData);
    let pk = todosListData.push(todoData)
    console.log(todosListData);
    localStorage.setItem('pktodo', JSON.stringify(todosListData))
}


// --------------------------------------------------------------------------------------

const showData = () =>{
    // let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
    var retriveData =  localStorage.getItem('pktodo')
    if(retriveData){
        todosListData = JSON.parse(retriveData)
        // console.log(todosListData)
    }
    
            todosListData.forEach(element => {
                var textnode = document.createTextNode(element);
                li = document.createElement('li')
                var checkbox = document.createElement('input')
                checkbox.type = 'checkbox';
                checkbox.setAttribute('id', 'check')

        
                var lable = document.createElement('label')
        
                ul.appendChild(li);
                li.appendChild(checkbox);
                lable.appendChild(textnode);
                li.appendChild(lable);
                ul.insertBefore(li, ul.childNodes[0]);
                
                li.className = 'visual';  
            }
            )     

        }

onload = showData()


// -----------------------------------------------------------
const removeDataLS = () =>{
    // let rk = localStorage.getItem('pktodo')
    // pkgh=JSON.parse(rk)
    // console.log(pkgh);
    // pkgh.pop()
        

        for(let i =0; i<li.length; i++){
            let jsk = li[i].children[1]
                console.log(jsk);
                  
            while(li[i]&& li[i].children[0].checked){
                console.log('hii checked');
        }
    }
    // const pkt = todosListData.splice[i]
    // console.log(todosListData);
//    localStorage.setItem('pkt', JSON.stringify(pkt))
}
// }



// -------------------------------------------------------------------------------------
var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);
removeButton.addEventListener('click', removeDataLS)

//add todo's 
function addItem() {
    updateLSData()
    var input = document.getElementById('input')
    var item = input.value;
    // console.log(item)
    document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item === '') {
        return false;
    }else{
        //first we creat li
        li = document.createElement('li')
        //then we create a checkbox
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';//type of our checkbox
        checkbox.setAttribute('id', 'check')//to give style to our to do

        //create lable 
        var lable = document.createElement('label')

        //add these element on web page
        ul.appendChild(li);
        li.appendChild(checkbox);
        lable.appendChild(textnode);
        li.appendChild(lable);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        
        input.value = '';
    } 
}


//To remove done todo's
function removeItem() {
    li = ul.children
    for (let i = 0; i < li.length; i++) {
       while (li[i] && li[i].children[0].checked) {
           ul.removeChild(li[i])
       }
    }
}