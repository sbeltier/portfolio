// Global Elements
let projects = document.getElementsByClassName('projects')


// Add Event Listener to Projects
for (let j = 0; j < projects.length; j++) {
    projects[j].addEventListener('click', function () {
        let modalID = "project" + (j + 1) + "-modal"
        let modal = document.getElementById(modalID)
        modal.classList.remove('hide')
        modal.classList.add('show')

        // Close out Modal
        let span = document.getElementsByClassName('close')[j]
        span.addEventListener('click', function () {
            modal.classList.remove('show')
            modal.classList.add('hide')

        })
    })
}

// Slide Show
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// // When a project is clicked, show description
// function getModal () {
//     console.log("Entering getModal")
//     console.log("projects: ", projects)
//     console.log("---------------------------")
//     for (let i=0; i < 2/*projects.length*/; i++){
//         console.log("i: " + i)
//         console.log(arrProjects)
//         // var modalID = "project" + (i+1);
//         // console.log(document.getElementById(modalID))
//         projects[i].addEventListener('click', function (){
//             let projectBlurb = this.getElementsByClassName('modal')[0]
//             var modalID = projectBlurb.id

//             console.log(projectBlurb)
//             console.log("---------------------------" + modalID)
//             document.getElementById(modalID).classList.remove('hide')
//             document.getElementById(modalID).classList.add('show')

//             // Close out Modal
//             let span = this.getElementsByClassName('close')[0]
//             span.addEventListener('click', function () {
//                 // console.log(document.getElementById(modalID))
//                 console.log("---------------------------" + modalID)
//                 document.getElementById(modalID).classList.remove('show')
//                 document.getElementById(modalID).classList.add('hide')
//                 // this.removeEventListener('click');

//             })
//         })
//     }
// }

// getModal();

// //When a project is not hovered over, hide description
// for (let j=0; j < projects.length; j++){
//     projects[j].addEventListener('mouseleave', function (){
//         let projectBlurb = this.getElementsByClassName('project-blurb-show')[0]
//         let arrProjects = [];
//         arrProjects.push(projectBlurb)
//         arrProjects[0].classList.remove('project-blurb-show')
//         arrProjects[0].classList.add('project-blurb-hide')
//     })
// }