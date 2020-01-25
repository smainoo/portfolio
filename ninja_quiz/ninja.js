const correctAnswers = ['B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');


form.addEventListener('submit', e =>{
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 33.3
      score = Math.floor(score);

    }
  });

  // score += 1;

  // show result on page
  scrollTo(0,0);

  result.classList.remove('d-none');

  // animate result
  let output = 0;
  const timer = setInterval(() =>{
    result.querySelector('span').textContent = `${score}%`;
    if(output === score){
      clearInterval(timer);
    }else{
      output++;
    }
  }, 10);






});
