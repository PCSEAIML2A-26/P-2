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

let svg_click_1 = document.getElementById("svg1");
let svg_click_2 = document.getElementById("svg2");
let svg_click_3 = document.getElementById("svg3");
let svg_click_4 = document.getElementById("svg4");

svg_click_1.addEventListener("click", (event) => {
  event.preventDefault();
  value1();
});

const value1 = () =>{
  
  document.querySelector(".ques_1").innerHTML = `<div class = "ans_1">  
  <span>What is NariSuraksha?</span> 
  <svg id = "cross_1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/cancel-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
  <path d="M19 5L5 19M5 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </div>
  <p>Our website is a dedicated platform committed to women's safety and welfare. We provide resources, support, and information to empower women and foster a secure environment. From educational initiatives to helpline services, we aim to create a comprehensive space where women can thrive, supported by a community dedicated to their well-being.</p>`
  
  svg_click_1.classList.add("hide")
  let svg_cross_1 = document.getElementById("cross_1");
  
  svg_cross_1.addEventListener("click", (event) => {
    
    event.preventDefault();
    svg_click_1.classList.remove("hide")
    document.querySelector(".ques_1").outerHTML = `
    <span class = "ques_1">What is NariSuraksha?</span>      
    `
  })
}


svg_click_2.addEventListener("click", (event) => {
  event.preventDefault();
  value2();
});

const value2 = () =>{
  document.querySelector(".ques_2").innerHTML = `
  <div class = "ans_1">  
  <span>How does the website ensure user privacy and data security?</span> 
  <svg id = "cross_2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/cancel-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
  <path d="M19 5L5 19M5 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </div>
  <p>We prioritize user privacy and data security. Employing robust encryption, regular security audits, and strict access controls, our platform adheres to industry best practices. We are committed to safeguarding your information, ensuring a secure and confidential space for all users to access resources and support.</p>`
  
  svg_click_2.classList.add("hide")
  let svg_cross_2 = document.getElementById("cross_2");
  
  svg_cross_2.addEventListener("click", (event) => {
    
    event.preventDefault();
    svg_click_2.classList.remove("hide")
    document.querySelector(".ques_2").outerHTML = `
    <span class = "ques_2">How does the website ensure user privacy and data security?</span>      
    `
  })
}

svg_click_3.addEventListener("click", (event) => {
  event.preventDefault();
  value3();
});

const value3 = () =>{
  document.querySelector(".ques_3").innerHTML =  `
  <div class = "ans_1">  
  <span>Can I share resources or contribute content to the website?</span> 
  <svg id = "cross_3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/cancel-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
  <path d="M19 5L5 19M5 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </div>
  <p>Absolutely! We welcome and encourage user contributions to enhance our community. Whether you have valuable resources, personal stories, or expertise to share, connect with us to collaborate. Your input not only strengthens our platform but also plays a vital role in collectively advancing the cause of women's safety and welfare.</p>`
  
  svg_click_3.classList.add("hide")
  let svg_cross_3 = document.getElementById("cross_3");
  
  svg_cross_3.addEventListener("click", (event) => {
    
    event.preventDefault();
    svg_click_3.classList.remove("hide")
    document.querySelector(".ques_3").outerHTML = `
    <span class = "ques_3">Can I share resources or contribute content to the website?</span>      
    `
  })
}

svg_click_4.addEventListener("click", (event) => {
  event.preventDefault();
  value4();
});

const value4 = () =>{
  document.querySelector(".ques_4").innerHTML = `
  <div class = "ans_1">  
  <span>How does the website tackle generational gaps in understanding <br>
  and addressing women's safety issues?</span> 
  <svg id = "cross_4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/icons/cancel-01-stroke-rounded.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="#000000">
  <path d="M19 5L5 19M5 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>
  </div>
  <p>The website bridges generational gaps by fostering inclusive dialogue and education. Through targeted content, events, and resources, we strive to empower all generations with the knowledge and tools needed to address and understand evolving women's safety issues, fostering a united front for change.</p>`
  svg_click_4.classList.add("hide")
  let svg_cross_4 = document.getElementById("cross_4");
  
  svg_cross_4.addEventListener("click", (event) => {
    
    event.preventDefault();
    svg_click_4.classList.remove("hide")
    document.querySelector(".ques_4").outerHTML = `
    <span class = "ques_4">How does the website tackle generational gaps in understanding <br>
    and addressing women's safety issues?</span>      
    `
  })
}