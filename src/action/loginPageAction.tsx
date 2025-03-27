import type { Route } from "../+types/signup.ts" 
import { redirect, data, ActionFunctionArgs } from "react-router";
import axios from "axios";

export async function loginPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const user = {
    email:email,
    password:password
  }
  // Verifique se a URL está correta
  const apiUrl = `${import.meta.env.VITE_LOCAL_API}/api/users/login`;
  console.log("Enviando para:", apiUrl);

  try {
    const response = await axios.post(
      apiUrl,
      { user },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    console.log("Resposta do servidor:", response.data);

    if (response.data.token) {
      return redirect("/dashboard");
    }

  } catch (error: any) {
    console.error("Erro completo:", error);

    // Verifique se há resposta do servidor
    if (error.response) {
      console.error("Dados da resposta de erro:", error.response.data);
      console.error("Status do erro:", error.response.status);
      console.error("Headers do erro:", error.response.headers);
    } else if (error.request) {
      console.error("A requisição foi feita mas não houve resposta");
    } else {
      console.error("Erro ao configurar a requisição:", error.message);
    }

  }
}