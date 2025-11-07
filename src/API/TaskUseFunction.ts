async function GetTasksFunction() {
    try {
        const response = await fetch('http://localhost:3000/tasks/getTasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: localStorage.getItem('username')}),
        })
        const data = await response.json();
        return data.tasks;
    } catch (error) {
        console.log(error);
    }

}

async function CreateTaskFunction(taskName:string, passwordDescription:string, username:null | string) {
    fetch('http://localhost:3000/tasks/createTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({taskName:taskName, description:passwordDescription, username: username}),
    })
}

async function DeleteTaskFunction(username: string | null, taskId:string) {
    fetch('http://localhost:3000/tasks/deleteTask', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, taskId:taskId}),
    })
}

async function UpdateTaskMarkerFunction(markerValue:string, taskId:string) {
    fetch('http://localhost:3000/tasks/updateTaskMarker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: localStorage.getItem('username'), taskId:taskId, taskMarker:markerValue}),
    })
}

async function ChangeTaskFunction(taskName:string, taskDescription:string, taskId:string) {
    fetch('http://localhost:3000/tasks/changeTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({taskName: taskName, taskDescription: taskDescription, username: localStorage.getItem('username'), taskId:taskId, }),
    })
}

async function ChangeFavoriteFunction(taskId:string) {
    fetch('http://localhost:3000/tasks/changeFavorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: localStorage.getItem('username'), taskId:taskId}),
    })
}

export {GetTasksFunction, CreateTaskFunction, DeleteTaskFunction, UpdateTaskMarkerFunction, ChangeTaskFunction, ChangeFavoriteFunction};
