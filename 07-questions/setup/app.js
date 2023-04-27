//using selectors inside the element
// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// });

//  ^^^^^^^^ good way

// shit way below

//using selectors inside the element
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', function () {
    // console.log(question);

    questions.forEach(function (item) {
      // checks if any other questionsa are open
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

// traverse dom w/ close other buttons

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const questions = document.querySelectorAll('.question');
//     const question = e.currentTarget.parentElement.parentElement;

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove('show-text');
//       }
//     });

//     question.classList.toggle('show-text');
//   });
// });
