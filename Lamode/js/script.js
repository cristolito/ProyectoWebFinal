const navbar = document.querySelector(".navbar");
const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const formUser = document.getElementById("form-user");
const header = document.querySelector("header");
const loginMessage = document.getElementById("loginMessage");
const signUpForm = document.getElementById("signUpForm");
const signupMessage = document.getElementById("signupMessage");
const goToSignUpLink = document.getElementById("goToSignUp");
let data = [{}];

// Flotantes con animaciones
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#cart-btn").onclick = () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
};

let mainLocation = window.scrollY;
window.onscroll = () => {
  let currentScroll = window.scrollY;
  if (mainLocation >= currentScroll) {
    header.style.top = "0";
  } else {
    header.style.top = "-200px";
  }
  mainLocation = currentScroll;

  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

document.getElementById("user-btn").onclick = () => {
  formUser.style.display = "flex";
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
  searchForm.classList.remove("active");
};

document.getElementById("close-login").onclick = () => {
  formUser.style.display = "none";
  resetFormLogin();
};

goToSignUpLink.addEventListener("click", (e) => {
  e.preventDefault();
  formUser.style.display = "none";
  resetFormLogin();
  signUpForm.style.display = "flex";
});

document.getElementById("close-sign").onclick = () => {
  signUpForm.style.display = "none";
  resetFormSign();
};

window.addEventListener("click", (e) => {
  if (e.target == formUser) {
    formUser.style.display = "none";
    resetFormLogin();
  }

  if (e.target == signUpForm) {
    signUpForm.style.display = "none";
    resetFormSign();
  }
});

// Seccion de Datos
// Validación de creación de usuario
const resetFormLogin = () => {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
};
const formValidationLogin = () => {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let userLogin = data.users?.find((user) => {
    console.log(user);
    user === username;
  });

  if (username === "admin" && password == 1234) {
    adminPage();
  } else if (username === "tienda" && password == 1234) {
    location.href = "./pageStore/index.html";
    resetFormLogin();
  } else if (userLogin === undefined)
    loginMessage.innerHTML = "Este usuario no existe";
  else {
    if (password != userLogin.password)
      loginMessage.innerHTML = "La contraseña es incorrecta";
    else {
      resetFormLogin();
      loginMessage.innerHTML = "!Bienvenido de nuevo " + userLogin + "¡";
    }
  }
};

formUser.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidationLogin();
});

const acceptData = (user) => {
  data.push(user);
  localStorage.setItem("data", JSON.stringify(data));
};

const resetFormSign = () => {
  document.getElementById("signupUsername").value = "";
  document.getElementById("signupEmail").value = "";
  document.getElementById("signupPassword").value = "";
  document.getElementById("signupFullName").value = "";
  document.getElementById("signupAge").value = "";
  document.getElementById("signupPhone").value = "";
};

const formValidationSign = () => {
  let signupUsername = document.getElementById("signupUsername").value;
  let signupEmail = document.getElementById("signupEmail").value;
  let signupPassword = document.getElementById("signupPassword").value;
  let signupFullName = document.getElementById("signupFullName").value;
  let signupAge = document.getElementById("signupAge").value;
  let signupPhone = document.getElementById("signupPhone").value;
  console.log(signupUsername)

  if (signupUsername === "") {
    signupMessage.innerHTML = "Debe poner un nombre de usuario";
    return;
  }
  if (signupEmail === "") {
    signupMessage.innerHTML = "Debe poner un correo electronico";
    return;
  }
  if (signupPassword === "") {
    signupMessage.innerHTML = "Debe tener un contraseña";
    return;
  }
  if (signupFullName === "") {
    signupMessage.innerHTML = "Debe poner almenos un nombre";
    return;
  }

  let user = {
    username: signupUsername,
    email: signupEmail,
    password: signupPassword,
    fullname: signupFullName,
    age: signupAge,
    phone: signupPhone,
  };

  acceptData(user);
  resetFormSign();
};

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidationSign();
});

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
})();

const adminPage = () => {
    console.log(data)
    const deleteUser = e => {
        e.parentElement.parentElement.remove();
      };
    document.write(`
    <link rel="stylesheet" href="./styles/style2.css">
    <div class="ag-format-container">
    <div class="ag-courses_box" id="ag-courses_box"></div>
    </div>`)
    let agCoursesBox = document.getElementById("ag-courses_box");
    agCoursesBox.innerHTML += 
data.map((user) => {
  return `<div class="ag-courses_item">
  <span class="ag-courses-item_link">
  <span class="close" id="delete-user" onclick="{}">&times;</span>
    <div class="ag-courses-item_bg"></div>

    <div class="ag-courses-item_title">
      Usuario: ${user.username}
    </div>

    <div class="ag-courses-item_date-box">
      Password:
      <span class="ag-courses-item_date">
        ${user.password}
      </span>
    </div>
  </span>
</div>`
})

}