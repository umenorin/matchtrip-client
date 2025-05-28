import axios from "axios";
import { ActionFunctionArgs, redirect } from "react-router";

export async function CreateTravelAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const imageTravel = formData.get("imageTravel");

  const travel = {
    name: formData.get("name"),
    description: formData.get("description"),
    country: formData.get("country"),
    city: formData.get("city"),
    startDate: formData.get("startDate"),
    endDate: formData.get("endDate"),
    limitTravelers: formData.get("limitTravelers"),
    owner: JSON.parse(localStorage.getItem("token") as string),
  };

  const formDataToSend = new FormData();
  formDataToSend.append("imageTravel", imageTravel as File); // o arquivo
  formDataToSend.append("travel", JSON.stringify(travel)); // string JSON

  const apiUrl = `${import.meta.env.VITE_LOCAL_API}/api/travel/create`;
  try {
    const response = await axios.post(apiUrl, formDataToSend, {
      withCredentials: true,
    });
    console.log(response);
    if (response.data) {
      return redirect("/");
    }
    console.log(response);
  } catch (error: any) {
    throw console.error(error.message);
  }
}
