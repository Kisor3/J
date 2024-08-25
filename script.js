function handleActivity(activity) {
    const initialMessageDiv = document.getElementById('initial-message');
    const followUpMessageDiv = document.getElementById('follow-up-message');
    const messageText = document.getElementById('message-text');
    const continueButton = document.getElementById('continue-button');
    const hunxaButton = document.getElementById('hunxa-button');

    initialMessageDiv.classList.add('hidden');
    followUpMessageDiv.classList.remove('hidden');

    if (activity === 'nachdai') {
        messageText.innerHTML = `Please yo geet ma video banayera pathauna.`;
        continueButton.classList.remove('hidden');
        continueButton.onclick = function() {
            window.location.href = 'https://youtube.com/shorts/r8G7MfIFkes?feature=shared';
        };
    } else if (activity === 'baseyako') {
        window.location.href = 'https://youtube.com/shorts/DbTX2AlpbK4?feature=shared';
    } else if (activity === 'geet') {
        messageText.innerHTML = `Plzzz yo geet gayera pathauna.`;
        hunxaButton.classList.remove('hidden');
    }
}

function continueLink() {
    window.location.href = 'https://youtube.com/shorts/r8G7MfIFkes?feature=shared';
}

function finalLink() {
    window.location.href = 'https://youtu.be/ntnYgF0G9o8?feature=shared';
}