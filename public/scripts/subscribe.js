const subscribeFormButton = document.getElementById('subscribe-button');
const subscribeForm = document.getElementById('subscribe')
const welcomeTextElement = document.querySelector('.welcome-text')
const bodyContainerElement = document.querySelector('.container')
const h1 = document.querySelector('h1')






function displayForm(event){
 event.preventDefault()
subscribeForm.style.display = 'block'
welcomeTextElement.style.display = 'none'

}


subscribeFormButton.addEventListener('click', displayForm)

setTimeout(() => subscribeFormButton.removeEventListener('click', displayForm), 3000)

 //const message = document.createElement('div')

//message.classList.add('welcome')

//message.innerHTML = 'Welcome to our Blog <button class="message-button">Close</button>'
//header.prepend(message)

//h1.addEventListener('mouseenter', function(e){
  //  alert('addEventListener: You are welcome to Glory ','s blog')
//})

