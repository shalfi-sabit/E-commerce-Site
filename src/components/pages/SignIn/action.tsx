import axios from "axios";
import { redirect, ActionFunctionArgs } from "react-router-dom";
export const loginAction: (
  args: ActionFunctionArgs
) => Promise<Response | null> = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/";

  try {
    const getToken = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });

    const token = getToken.data.token;
    localStorage.setItem("token", token);

    const allUsers = (await axios.get("https://fakestoreapi.com/users")).data;

    const foundUser = await allUsers.filter(
      (userData: any) => userData.username === username
    )[0];

    const curUserData = {
      userName: foundUser.username,
      address: foundUser.address,
      name: foundUser.name,
      email: foundUser.email,
    };

    localStorage.setItem("user", JSON.stringify(curUserData));

    return redirect(redirectTo);
  } catch (error: any) {
    return null;
  }
};
