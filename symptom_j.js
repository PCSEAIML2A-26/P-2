function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.classList.toggle("show");
  }
  
  window.onclick = function (event) {
    if (!event.target.matches(".btn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
 
 const API_KEY = '';
  const submitButton = document.querySelector('#submit');
  const outPutElement = document.querySelector('#output');
  const inputElement1 = document.querySelector('#question');
  const inputElement = `in the form of the camma seperated value give me possible diseases that i might have, my symptoms are : ${inputElement1.value}, the response should only comprise of 5 diseases and nothing else;`
  const historyElement = document.querySelector('.history');
  const buttonElement = document.querySelector('#btn2');
  
  function changeInput(value) {
      inputElement.value = value;
  }
  
  async function getMessage(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      const options = {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${API_KEY}`,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: inputElement}],
              max_tokens: 1000
          })
      };
  
      try {
          const response = await fetch('https://api.openai.com/v1/chat/completions', options);
          const data = await response.json();
          console.log(data);
          outPutElement.textContent = data.choices[0].message.content;
          if (data.choices[0].message.content) {
              const pElement = document.createElement('p');
              pElement.textContent = inputElement;
              pElement.addEventListener('click', () => changeInput(pElement.textContent));
              historyElement.append(pElement);
          }
  
      } catch (error) {
          console.error(error);
      }
  }
  
  function clearInput() {
      inputElement1.value = '';
  }
  
  submitButton.addEventListener('click', getMessage);
  buttonElement.addEventListener('click', clearInput);
  
