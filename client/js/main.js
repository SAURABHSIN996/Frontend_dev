const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const courses = document.getElementsByName('course');

  let coursesInterested = [];

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].checked) {
      coursesInterested.push(courses[i].value);
    }
  }

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Courses Interested:', coursesInterested);
});

// FOR CREATING TIMED PROMPT BOX
// setTimeout(function() {
//   document.getElementById("popup").style.display = "block";

//   document.getElementById("close").addEventListener("click", function() {
//     document.getElementById("popup").style.display = "none";
//   });
// }, 10000);