const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav__links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

//project section
const projctGrid = document.querySelector('.project__grid');

//get projects from the data.js file
const projects = projectArr;
projects.map((project) => addProject(project));

function addProject(project) {
  const { title, description, live, sourceCode, image } = project;

  console.log(image);

  const projectItem = `
    <div class="project__grid-item">
        <img src=${image} alt="">
        <h3>
            ${title}
        </h3>
        <p>
            ${description}
        </p>
        <div class="btns">
        <a href=${live} target="_blank"> <button>  Live </button>
        </a> 
        <a href=${sourceCode} target="_blank" > <button> Source Code </button> 
            </a> 
        </div> 
   </div>`;

  projctGrid.insertAdjacentHTML('beforeend', projectItem);
}
