let users = []

// get form & tbody

const form = document.getElementById('userform')
const tablebody = document.getElementById('tablebody')
const editIndexInput = document.getElementById('editindex')

// add entry to users

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // get name and email
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    if(editIndexInput.value==""){
        // add nam and email to users 
        users.push({name, email})
    }else{
        users[editIndexInput.value] = {name,email}
        editIndexInput.value = ""
    }
    
    
    form.reset()
    console.log(users);
    displayUsers()
    
})
//Users should be listed in the table body 
const displayUsers = ()=>{
    tablebody.innerHTML = ""
    users.forEach((user,index)=>{
        tablebody.innerHTML += `
                <tr>
                    <td>${index+1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>
                        <div class="d-flex">
                            <button onClick="editUser(${index})" class="btn btn-warning">Edit</button>
                            <button  onClick="deleteUser(${index})" class="btn btn-danger ms-3">Delete</button>
                        </div>
                    </td>
                </tr>`
    })
}

const editUser = (index)=>{
     document.getElementById('name').value = users[index].name
     document.getElementById('email').value = users[index].email

     editIndexInput.value = index
}

const deleteUser = (index)=>{
    if(confirm(`Are you sure that you want to delete this Data?`)){
        users.splice(index,1)
        displayUsers()
    }
}