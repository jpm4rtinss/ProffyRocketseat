
document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField (){

    //clone field schedule
   const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
   //reset the value of the new input
   const fields =  newFieldContainer.querySelectorAll('input')
   fields.forEach(function(field){
      field.value='' 
   })
   //put the clone item in the document
   document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

