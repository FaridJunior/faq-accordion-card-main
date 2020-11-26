document.addEventListener('DOMContentLoaded',()=>{
  const questionsWrapper = document.querySelectorAll(".question-wrapper")
  const questionsText = document.querySelectorAll('.question-text')
  questionsText.forEach(qtext =>{
    // toogle active from question text parent element
    qtext.addEventListener("click",()=>{
      // remove active from other questions wrappers 
      questionsWrapper.forEach(questionWrapper =>{
        if(questionWrapper === qtext.parentNode )return;
        questionWrapper.classList.remove("active")
      })
      qtext.parentNode.classList.toggle("active")
    })
  })
  /* it is more elegent event handle
  const questionsArea = document.querySelector('.questions-area')
  questionsArea.addEventListener("click",(e)=>{
    console.log("this => ", this);
    // deactive all before active any one
    const questions = questionsArea.querySelectorAll(".question-wrapper")
    questions.forEach(question => question.classList.remove("active"))
    console.log(e.target);
      if(e.target.classList.contains("question-text")){
        e.target.parentNode.classList.toggle("active")
      }
    })
  */
  })