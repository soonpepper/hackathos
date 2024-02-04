document.addEventListener('DOMContentLoaded', () => {
  const chatBox = document.getElementById('chat-box');
  const chatForm = document.getElementById('chat-form');
  const userInput = document.getElementById('user-input');

  chatForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const userQuestion = userInput.value.trim();
    if (userQuestion === '') return;

    appendMessage('You', userQuestion);

    try {
      const chatGPTResponse = await sendMessageToChatGPT(userQuestion);
      appendMessage('ChatGPT', chatGPTResponse);
    } catch (error) {
      console.error('Error sending message to ChatGPT:', error);
    
      // Log the error message to get more details
      console.log('Error message:', error.message);
    
      // Provide a generic error message to the user
      appendMessage('ChatGPT', 'Oops, something went wrong. Please try again.', error.message);
    }
    

    userInput.value = '';
  });

  const appendMessage = (sender, message) => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  };

  const sendMessageToChatGPT = async (userInput) => {
    const apiKey = "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"; // Replace with your actual API key
    const apiUrl = "https://api.openai.com/v1/chat/completions" // Replace with your actual API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: userInput },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const result = await response.json();
      return result.choices[0].message.content;
    } catch (error) {
      throw new Error(`Failed to send message to ChatGPT: ${error.message}`);
    }
  };
});
