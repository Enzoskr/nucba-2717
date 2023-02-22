const form = document.getElementById("form");
const nameInput = document.getElementById("username");
const passInput = document.getElementById("password");

const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 20;

  const username = nameInput.value.trim();

  if (isEmpty(username)) {
    showError(nameInput, "El nombre es obligatorio");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      nameInput,
      `El nombre debe tener entre ${min} y ${max} caracteres`
    );
  } else {
    showSuccess(nameInput);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = passInput.value.trim();

  if (isEmpty(password)) {
    showError(passInput, "La contraseña es obligatoria");
  } else if (!isPassSecure(password)) {
    showError(
      passInput,
      "La contraseña debe tener al menos un largo de 8 caracteres, que contenga al menos un digito numerico, una letra mayúscula, una letra minúscula y un simbolo"
    );
  } else {
    showSuccess(passInput);
    valid = true;
  }
  return valid;
};

const debounce = (fn, delay = 800) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isUsernameValid = checkUsername();
  let isPassSecure = checkPassword();

  let isFormValid = isUsernameValid && isPassSecure;

  if (isFormValid) {
    form.submit();
  }
});

const isEmpty = (value) => value === "";

const isBetween = (length, min, max) => {
  return length < min || length > max ? false : true;
};
const isPassSecure = (pass) => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  return re.test(pass);
};
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const error = formField.querySelector("small");
  error.textContent = "";
};

form.addEventListener(
  "input",
  debounce((e) => {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "password":
        checkPassword();
        break;
    }
  })
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUsername();
});
