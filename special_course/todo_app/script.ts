type Task = {
    id: number;
    title: string;
    completed: boolean;
}

const form = document.getElementById("taskForm") as HTMLFormElement;
const input = document.getElementById("taskInput") as HTMLInputElement
const list = document.getElementById("taskList") as HTMLUListElement;
let tasks: Task[] = []
let nextId = 1;

function createSampleTass(): void{
    const samples: Omit<Task,"id">[]=[
        {title:"Buy groceries", completed: true},
        {title: "Finish Type Script Homework", completed: false},
        {title: "Es6 Daily Target", completed: false},
        {title: "React Framework Learning", completed: false},
        {title: "Reading Quaran", completed: false},
        {title: "Waking 30min on the field", completed: true},
    ]

    samples.forEach((sample)=>{
        tasks.push({id: nextId++,title: sample.title,completed: sample.completed})
    });
}

function renderTasks(): void{
    list.innerHTML = ""
    tasks.forEach((task)=>{
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", ()=>{
            task.completed = checkbox.checked;
        });

        const span = document.createElement("span");
        span.textContent = task.title;

        li.append(checkbox, span);
        list.append(li);
    });
}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    tasks.push({id: nextId++,title: input.value, completed: false})
    input.value = "";
    input.focus();

    renderTasks();
})

createSampleTass();
renderTasks();

// console.log(tasks)