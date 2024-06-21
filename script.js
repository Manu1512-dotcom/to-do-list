let addButton=document.querySelector("#addButton");
let list=document.querySelector("#list");
// let deleteBtns=document.querySelectorAll(".deleteBtn");

function addNewTask(task)
{
    let outerDiv=document.createElement("div");
    outerDiv.classList.add("tasks");

    let innerDiv1=document.createElement("div")
    innerDiv1.classList.add("checkdiv");

    let checkBtn=document.createElement("div");
    checkBtn.classList.add("checkButton");
    checkBtn.value="unchecked";
    innerDiv1.append(checkBtn);

    let innerDiv2=document.createElement("div");
    innerDiv2.classList.add("content");
    innerDiv2.innerText=task;

    let deleteBtn=document.createElement("button");
    deleteBtn.classList.add("deleteButton");
    deleteBtn.innerText="X";

    outerDiv.append(innerDiv1);
    outerDiv.append(innerDiv2);
    outerDiv.append(deleteBtn);

    list.append(outerDiv);
    document.querySelector("#writtingBox").value="";
    // deleteBtns=document.querySelectorAll(".deleteBtn");

    deleteBtn.addEventListener("click",(evt)=>
    {
       evt.target.parentElement.remove(); 
    });

    checkBtn.addEventListener("click",(evt)=>{
        if(evt.target.value==="unchecked")
        {
            evt.target.classList.add("checked");
            evt.target.value="checked";
            // console.log(evt.target.parentElement.parentElement.childNodes);
            let children=evt.target.parentElement.parentElement.childNodes;
            children[1].classList.add("completed");
        }
        else
        {
            evt.target.classList.remove("checked");
            evt.target.value="unchecked";
            // console.log(evt.target.parentElement.parentElement.childNodes);
            let children=evt.target.parentElement.parentElement.childNodes;
            children[1].classList.remove("completed");
        }
    });
}

addButton.addEventListener("click",(evt)=>{
    let newTask=document.querySelector("#writtingBox").value;
    // console.log(newTask);
    if(newTask.length !== 0)
    {
        addNewTask(newTask);
    }
    
});