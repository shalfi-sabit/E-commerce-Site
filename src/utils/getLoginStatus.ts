const getLoginStatus = (): boolean => {
  const token = localStorage.getItem("token");
  return token !== null;
};

export default getLoginStatus;
