//const myelement = document.querySelectorAll('h1')

// myelement.forEach(function(p){
//     p.textContent='i was changed by nithin'
// })

// const myHeddings = document.querySelector('.apple')
// myHeddings.textContent='i am a changed heading'

// creating new para
// const myNewPara =document.createElement('p')
// myNewPara.textContent='i was added by java script'

//document.querySelector('body').appendChild(myNewPara)

//adding an event
// document.querySelector('button').addEventListener('click',(event)=>
//     event.target.textContent='i was clicked'
// )

//track input form

// document.querySelector('#myform').addEventListener('input',(event)=>{
//     //console.log(event.target.value)
//     var list= document .querySelector('body')
//     list.removeChild(list.lastChild)
//     const inputValue =document.createElement('p')
//     inputValue.textContent=event.target.value
//     document.querySelector('body').appendChild(inputValue)
// })


// function formValid(){
//     const val = document.getElementById('myform').value
//     if (isNaN(val)){
//         console.log("enter number");
        
//     }else{
//         convertedVal=val*73

//         const newpara= document.createElement('p')
//         newpara.textContent = convertedVal
//         document.querySelector('body').appendChild(newpara)
//     } 
// }

// document.querySelector('.myform').addEventListener('submit',(event)=>{
//     event.preventDefault();
//     console.log(event.target.username.value);
//     console.log(event.target.realname.value)
//     event.target.username.value=''
//     event.target.realname.value=''
// })
