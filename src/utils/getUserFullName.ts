const getUserFullName = () => {
  const user = localStorage.getItem("user") || "";
  const firstName = JSON.parse(user).name.firstname;
  const lastName = JSON.parse(user).name.lastname;
  return `${firstName[0].toUpperCase() + firstName.slice(1)} ${
    lastName[0].toUpperCase() + lastName.slice(1)
  }`;
};

export default getUserFullName;
