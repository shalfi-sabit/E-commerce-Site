const getUserFullName = () => {
  const user = localStorage.getItem("user") || "";
  return `${JSON.parse(user).name.firstname} ${JSON.parse(user).name.lastname}`;
};

export default getUserFullName;
