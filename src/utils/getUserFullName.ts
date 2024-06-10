const getUserFullName = () => {
  const firstName = localStorage.getItem("firstName") || "";
  const lastName = localStorage.getItem("lastName") || "";
  return `${firstName} ${lastName}`.trim();
};

export default getUserFullName;
