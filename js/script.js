let currentDate = new Date();

function generateCalendar() {
    var calendarDays = document.getElementById('calendarDays');
    calendarDays.innerHTML = ''; 
    var daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    var firstDayOfWeek = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()-1;

    for (var i = 0; i < 7; i++) {
        var dayElement = document.createElement('div');
        dayElement.classList.add('day');
        dayElement.textContent = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'][i];
        calendarDays.appendChild(dayElement);
    }

    for (var i = 1; i <= daysInMonth + firstDayOfWeek; i++) {
        var dayElement = document.createElement('div');
        dayElement.classList.add('day');
        if (i > firstDayOfWeek) {
            dayElement.textContent = i - firstDayOfWeek;
            if (currentDate.toDateString() === new Date().toDateString() && (i - firstDayOfWeek) === new Date().getDate()) {
                dayElement.classList.add('today');
            }
        }
        calendarDays.appendChild(dayElement);
    }

    var dayElements = document.getElementsByClassName('day');
    for (var i = 0; i < dayElements.length; i++) {
        dayElements[i].addEventListener('click', function() {
            var eventContainer = document.getElementById('eventContainer');
            eventContainer.style.display = 'block';
            eventContainer.style.top = this.offsetTop + this.offsetHeight + 'px';
            eventContainer.style.left = this.offsetLeft + 'px';
        });
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendarHeader();
    generateCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendarHeader();
    generateCalendar();
}

function updateCalendarHeader() {
    document.getElementById('currentMonth').textContent = new Date(currentDate).toLocaleString('nl-NL', { month: 'long', year: 'numeric' });
}

function addEvent() {
    var eventInput = document.getElementById('eventInput').value.trim();
    if (eventInput !== '') {
    
    }
}

generateCalendar();