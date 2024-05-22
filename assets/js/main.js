// add hovered class to selected list item



let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function() {
  let currentUrl = window.location.href;

  let navigationLinks = document.querySelectorAll(".navigation li a");

  navigationLinks.forEach(function(link) {
      if(link.href === currentUrl) {
          link.parentElement.classList.add("active");
      } else {
          link.parentElement.classList.remove("active"); // Hapus kelas "active" dari item navigasi yang tidak sesuai
      }
  });
});


// tambahan

document.addEventListener('DOMContentLoaded', () => {
  const logos = document.querySelectorAll('.tech-logo');
  logos.forEach(logo => {
      logo.addEventListener('click', () => {
          alert(`Anda mengklik logo ${logo.alt.split(' ')[0]}!`);
      });
  });
});


function show1() {
  Swal.fire({
    title: "<strong>game</strong>",
    html: `
      <div style="display: flex; justify-content: space-around; align-items: center;">
        <div style="text-align: center;">
          <img src="./assets/imgs/pointblank.jpg" alt="PointBlank" style="width: 100px; height: 100px; display: block; margin: 0 auto 10px;">
          <p>PointBlank</p>
        </div>
        <div style="text-align: center;">
          <img src="./assets/imgs/ml.jpg" alt="Mobile Legends" style="width: 100px; height: 100px; display: block; margin: 0 auto 10px;">
          <p>Mobile Legends</p>
        </div>
        <div style="text-align: center;">
          <img src="./assets/imgs/pubg.jpg" alt="PUBG" style="width: 100px; height: 100px; display: block; margin: 0 auto 10px;">
          <p>PUBG</p>
        </div>
      </div>
    `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Like
    `,
    confirmButtonAriaLabel: "Like"
  });
}

function show2() {
  Swal.fire({
    title: "<strong>game</strong>",
    html: `
      <div style="display: flex; justify-content: space-around; align-items: center;">
        <div style="text-align: center;">
          <img src="./assets/imgs/futsal.jpeg" alt="Futsal" style="width: 100px; height: 100px; display: block; margin: 0 auto 10px;">
          <p>futsal</p>
        </div>
        <div style="text-align: center;">
          <img src="./assets/imgs/biliard.jpg" alt="Biliard" style="width: 100px; height: 100px; display: block; margin: 0 auto 10px;">
          <p>biliard</p>
        </div>
        <div style="text-align: center;">
          <img src="./assets/imgs/volly.jpg" alt="Volly" style="width: 100px; height: 100px; display: block; margin: 0 auto 10px;">
          <p>volly</p>
        </div>
      </div>
    `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Like
    `,
    confirmButtonAriaLabel: "Like"
  });
}

function show3() {
  Swal.fire({
    title: "<strong>Music Playlist</strong>",
    html: `
      <div style="text-align: center;">
        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Like
    `,
    confirmButtonAriaLabel: "Like"
  });
}


