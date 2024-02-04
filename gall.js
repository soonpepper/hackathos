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
        appendMessage('ChatGPT', 'Oops, something went wrong. Please try again.');
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
      const apiKey = 'Ysk-to1FckK0JLxrE4VpruKuT3BlbkFJRNal1Sc3ygT4eoAmdDsI';
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
  
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
  
      const result = await response.json();
      return result.choices[0].message.content;
    };
  });
  