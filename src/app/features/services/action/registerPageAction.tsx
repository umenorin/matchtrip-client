import { redirect, ActionFunctionArgs } from "react-router";
import axios from "axios";

export async function registerPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const user = {
    name: String(formData.get("name")),
    password: String(formData.get("password")),
    numberPhone: String(formData.get("numberPhone")),
    age: Number(formData.get("age")),
    uniqueIdentification: formData.get("uniqueIdentification"),
    email: String(formData.get("email")),
    nationality: String(formData.get("nationality")),
    gender: String(formData.get("gender")),
  };
  console.log(user)
  const apiUrl = `${import.meta.env.VITE_LOCAL_API}/api/users/singup`;

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
    console.error("error: ", error);
  }
}
