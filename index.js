
        function addTask() {
            let input = document.getElementById("inputText").value;
            if (input === "") {
                alert("You must write something!");
                return;
            }

            let taskContainer = document.createElement("div");
            taskContainer.className = "task";

            let taskContent = document.createElement("span");
            taskContent.textContent = input;

            let removeButton = document.createElement("button");
            removeButton.innerHTML = '<i class="fas fa-trash"></i>';
            removeButton.onclick = function () {
                taskContainer.remove();
            };

            taskContainer.appendChild(taskContent);
            taskContainer.appendChild(removeButton);

            document.getElementById("toDoContainer").appendChild(taskContainer);

            document.getElementById("inputText").value = "";
        }
