import { redirect, ActionFunctionArgs } from "react-router";
import axios from "axios";

export async function loginPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const user = {
    email: email,
    password: password,
  };

  const apiUrl = `${import.meta.env.VITE_LOCAL_API}/api/users/login`;

  try {
    const response = await axios.post(
      apiUrl,
      { user },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    if (response.data.token) {
      const userData = response.data.token;
      const { id, ...rest } = userData;

      localStorage.setItem("user", JSON.stringify(rest));
      localStorage.setItem("token", JSON.stringify(id));

      return redirect("/");
    }
  } catch (error: any) {
    console.error("Error: ", error);
  }
}
