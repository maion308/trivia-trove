
const question = document.querySelector("#question");
let answer = document.querySelector('#answer');
const createBtn = document.querySelector('#create-btn');
const testButton = document.querySelector('#a_test');


createBtn.addEventListener('click', (e)=>{
    console.log(e.target);
    e.preventDefault();
    createBtn.classList.add('hide');
})



  testButton.addEventListener('click', (e) => {
    e.preventDefault();
    async function getUser() {
        try {
          const response = await axios.get('https://opentdb.com/api.php?amount=10&category=9');
          let result = response.data.results[0];
          question.innerHTML = result.question;
          answer = result.correct_answer;
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
  })