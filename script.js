const btn = document.getElementById('btn')
const screen = document.getElementById('demo')

const person = ['Teddy🙄', ' Great😪', 'Vicman', 'Milla😭', 'Mimi😚', 'Kent']

btn.addEventListener('click', () =>{
    const names = Math.floor(Math.random()* person.length)
    giveLaunch(names);
})

function giveLaunch(names){
    let randomPerson = person[names]
    screen.innerText = `${randomPerson} will buy me lunch🥺🥺😁`
}

var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btns = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btns.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }