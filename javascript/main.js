const themeBtn = document.querySelector('.theme-btn');
let alertMsg = document.querySelector(".alert-text");
let element = document.body;
let getMode = localStorage.getItem("mode");
if (getMode && getMode == "light") {
  element.classList.toggle("light-mode");
}
themeBtn.addEventListener('click',() =>{
    document.querySelector('.theme-btn i').classList.toggle('uil-sun');
    element.classList.toggle("light-mode");
    if (element.classList.contains("light-mode")) {
      return localStorage.setItem("mode","light");
    }
    else{
      localStorage.setItem("mode", "light-mode");
    }
})

//code for animate on scroll
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

function sendMessage(){
  alertMsg.classList.add("show");
  setInterval(() => {
    alertMsg.classList.remove("show");
  }, 6000);
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_r7wcb37";
    const templateID = "template_p1crjvl";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "",
          swal("Successful", "Your message has been sent successfully", "success");
  
      })
      .catch(err=>swal("Error", "try agaom", "error"));
  }

  //jquery
  $(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.item').show('1000');
        }
        else{
            $('.item').not('.'+value).hide('1000');
            $('.item').filter('.'+value).show('1000');
        }
    })
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
  })