const checkFormValidation = (name, email, passwrd) => {
  const validName = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
  const validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const validPwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    passwrd
  );
  if (!validName) return "Full Name is Not Valid";
  if (!validEmail) return "EmailID is Not Valid";
  if (!validPwd) return "Password is Not Valid";
  return null;
};
export default checkFormValidation;
