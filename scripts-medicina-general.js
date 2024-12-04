// scripts-medicina-general.js

// Function to navigate between sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');
}

// Function to handle appointment booking
function bookAppointment(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (name && date && time) {
        alert(`Cita agendada para ${name} el ${date} a las ${time}.`);
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Function to load patient history dynamically
function loadHistory() {
    const historyTable = document.getElementById('history-table');
    historyTable.innerHTML = `
        <tr>
            <td>Juan Pérez</td>
            <td>05/11/2024</td>
            <td>Revisión general</td>
            <td>Sin complicaciones</td>
        </tr>
        <tr>
            <td>María Gómez</td>
            <td>03/11/2024</td>
            <td>Control de presión arterial</td>
            <td>Presión estable</td>
        </tr>
    `;
}

// Function to handle chat functionality
function sendMessage() {
    const message = document.getElementById('message').value;
    const chatBox = document.getElementById('chat-box');
    if (message) {
        const newMessage = document.createElement('p');
        newMessage.textContent = `Usted: ${message}`;
        chatBox.appendChild(newMessage);
        document.getElementById('message').value = '';
    } else {
        alert('Por favor, escriba un mensaje.');
    }
}
