var input = document.querySelector(".entered-list");
var addBtn = document.querySelector(".add-list");
var tasks = document.querySelector(".tasks");

input.addEventListener("keyup", () => {
    if(input.value.trim() != 0){
        addBtn.classList.add("active");
    }
    else{
        addBtn.classList.remove("active");
    }
})

addBtn.addEventListener('click', () => {
    if(input.value.trim() != 0)
    {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fas fa-check-square"></i>
            <i class="fas fa-trash"></i>
        </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    }
    else{
        alert("Please enter a task");
    }
})

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.parentElement.remove();
    }
})
tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-check-square')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    }
})


document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter')
    {
        if(input.value.trim() != 0)
        {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
            <p>${input.value}</p>
            <div class="item-btn">
                <i class="fas fa-check-square"></i>
                <i class="fas fa-trash"></i>
            </div>
            `
            tasks.appendChild(newItem);
            input.value = '';
        }
        else{
            alert("Please enter a task");
        }
    }
  })
