// JavaScript file that implement logic for write-new-email.html

import { EmailAPI } from "/assets/js/emailAPI.js"

window.onload = (e) => {
    document.getElementById('home-button')?.addEventListener('click', () => { window.location.href = '/index.html' });
    document.getElementById('clear-all-fields-button')?.addEventListener('click', OnClearButtonClick);
    document.getElementById('send-email-button')?.addEventListener('click', OnSendEmailButonClick);
}

function OnClearButtonClick() {
    document.getElementById('sender').value = '';
    document.getElementById('receivers').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('body').value = '';
}

async function OnSendEmailButonClick() {
    let email = {};

    const sender = document.getElementById('sender');
    if(!sender) {
        alert('Sender field is empty!')
        return;
    }
    email.sender = sender.value;

    const receivers = document.getElementById('receivers');
    if(!receivers) {
        alert('Receiver field is empty!')
        return;
    }

    email.receivers = receivers.value.split(';');

    const subject = document.getElementById('subject');
    if(!subject) {
        alert('Subject field is empty!')
        return;
    }
    email.subject = subject.value;

    // Body can be empty
    const body = document.getElementById('subject');
    if(body) {
        email.body = body.value;
    }
    
    const success = await EmailAPI.CreateNewEmail(email);
    if(success) {
        alert('Email successfully sent')
        OnClearButtonClick();
    }
    
}