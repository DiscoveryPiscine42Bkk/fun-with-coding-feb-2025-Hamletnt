$(document).ready(function() {
    const setCookie = (name, value) => document.cookie = `${name}=${encodeURIComponent(value)}; path=/;`;
    const getCookie = (name) => (document.cookie.match(`(^|;)\\s*${name}=([^;]+)`) || [])[2] ? decodeURIComponent(RegExp.$2) : "";

    const saveTasks = () => setCookie("tasks", $("#ft_list").html());
    $("#ft_list").html(getCookie("tasks") || "");

    $("#newTask").click(() => {
        let task = prompt("Enter a new task:");
        if (task) $("#ft_list").prepend(`<div class='task'>${task}</div>`), saveTasks();
    });

    $("#ft_list").on("click", ".task", function() {
        if (confirm("Do you want to delete this task?")) $(this).remove(), saveTasks();
    });
});
