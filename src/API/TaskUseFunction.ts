async function GetTasksFunction() {
    try {
        const response = await fetch('https://to-do-app-8gpq.onrender.com/tasks/getTasks', {
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
    fetch('https://to-do-app-8gpq.onrender.com/tasks/createTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({taskName:taskName, description:passwordDescription, username: username}),
    })
}

async function DeleteTaskFunction(username: string | null, taskId:string) {
    fetch('https://to-do-app-8gpq.onrender.com/tasks/deleteTask', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, taskId:taskId}),
    })
}

async function UpdateTaskMarkerFunction(markerValue:string, taskId:string) {
    fetch('https://to-do-app-8gpq.onrender.comtasks/updateTaskMarker', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: localStorage.getItem('username'), taskId:taskId, taskMarker:markerValue}),
    })
}

async function ChangeTaskFunction(taskName:string, taskDescription:string, taskId:string) {
    fetch('https://to-do-app-8gpq.onrender.com/tasks/changeTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({taskName: taskName, taskDescription: taskDescription, username: localStorage.getItem('username'), taskId:taskId, }),
    })
}

async function ChangeFavoriteFunction(taskId:string) {
    fetch('https://to-do-app-8gpq.onrender.com/tasks/changeFavorite', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: localStorage.getItem('username'), taskId:taskId}),
    })
}

export {GetTasksFunction, CreateTaskFunction, DeleteTaskFunction, UpdateTaskMarkerFunction, ChangeTaskFunction, ChangeFavoriteFunction};
