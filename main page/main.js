let timerInterval;
let timeRemaining = 0;

// Redirect to Google Calendar when the button is clicked
document.getElementById('load-calendar').addEventListener('click', function() {
    const gmail = document.getElementById('gmail').value.trim();
    if (gmail) {
        const calendarUrl = `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(gmail)}`;
        window.open(calendarUrl, '_blank');
    } else {
        alert('Please enter a valid Gmail address.');
    }
});

// Start Timer
document.getElementById('start-timer').addEventListener('click', function() {
    const duration = parseInt(document.getElementById('pomodoro-duration').value);
    timeRemaining = duration;

    clearInterval(timerInterval);
    timerInterval = setInterval(function() {
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            document.getElementById('timer-display').textContent = '00:00';
        } else {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            document.getElementById('timer-display').textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    }, 1000);
});

// Stop Timer
document.getElementById('stop-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
});

// Reset Timer
document.getElementById('reset-timer').addEventListener('click', function() {
    clearInterval(timerInterval);
    timeRemaining = 0; // Reset time remaining
    document.getElementById('timer-display').textContent = '00:00'; // Reset display
});

// To Do List
document.getElementById('add-todo').addEventListener('click', function() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();
    if (todoText) {
        const todoList = document.getElementById('todo-list');

        // Create a new list item
        const li = document.createElement('li');

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // Add event listener for the checkbox
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                li.classList.add('completed');
            } else {
                li.classList.remove('completed');
            }
        });

        // Append checkbox and text to the list item
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(todoText));

        // Append the list item to the to-do list
        todoList.appendChild(li);

        // Clear input
        todoInput.value = '';
    }
});
