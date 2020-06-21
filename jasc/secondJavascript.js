var ul= document.getElementById('list')


var addButton= document.getElementById('add');
addButton.addEventListener('click',createEvent)
var count=0;

var removeButton= document.getElementById('remove');
removeButton.addEventListener('click',removeEvent)

var backButton= document.getElementById('back');
backButton.addEventListener('click',backEvent)

// var inputEvent=document.getElementById('input')
// button =addButton
// inputEvent.addEventListener('input',(event)=>{
//     if(event.target.value === ''){
//         button.remove()
//     } 
//     else{
//         console.log(addButton);
//         var controls= document.querySelector('.controls')
//         controls.append(addButton)
//         addButton.appendBefore(removeButton)
//         removeButton.append(addButton)
//     }
// })


function createEvent(){
    var input = document.getElementById('input') 
    var inVal=input.value
    if (inVal==='') {
        return false;        
    }
    else{
        var lable= document.createElement('label')
        var labelText= document.createTextNode(inVal)
        var li= document.createElement('li')
        var checkBox= document.createElement('input')
        checkBox.type='checkbox'
        checkBox.setAttribute('id','check')

        lable.appendChild(labelText)
        li.appendChild(checkBox)
        li.appendChild(lable)
        ul.insertBefore(li,ul.childNodes[0])
        li.className='visual'
        input.value=''
    }
    
}

window.onbeforeunload = function(event) {
    event.returnValue='';
};

function removeEvent(){
    
    li=ul.children
    for (let i = 0; i < li.length; i++) {
        while (li[i].className !='changed' && li[i].children[0].checked) {  //delets only one element( li[i] &&) 
            // ul.removeChild(li[i])
            count+=1;
            li[i].className='changed'
            ul.appendChild(li[i])
            returnValue='hi'
            //ul.removeChild(li[i])
            break
            
        }
        
        
        
    }
    console.log(ul);
    console.log(li.length);
    console.log(count);
    
    
    
       
}


function backEvent(){
    li=ul.children
    var b=li.length-count
    // console.log(count);
    // console.log(li.length);
    // console.log(b);
    li[b].className='visual'
    count-=1

}