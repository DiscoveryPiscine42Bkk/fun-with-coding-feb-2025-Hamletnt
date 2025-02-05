$(document).ready(function() {
    function loadTasks() {
        let tasks = getCookies("tasks");
        if (tasks) {
            tasks.split("|~|").forEach(task => {
                if (task) $("#ft_list").prepend(`<div class='task'>${task}</div>`);
            });
        }
    }

    function saveTasks() {
        let taskArray = [];
        $(".task").each(function() {
            taskArray.push($(this).text());
        });
        document.cookie = "tasks=" + taskArray.join("|~|") + "; path=/";
    }

    function getCookies(name) {
        let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? match[2] : "";
    }

    $("#newTask").on("click", function() {
        let task = prompt("Enter a new task:");
        if (task) {
            $("#ft_list").prepend(`<div class='task'>${task}</div>`);
            saveTasks();
        }
    });

    $("#ft_list").on("click", ".task", function() {
        if (confirm("Do you want to delete this task?")) {
            $(this).remove();
            saveTasks();
        }
    });

    loadTasks();
});
