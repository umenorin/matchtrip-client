import { redirect, ActionFunctionArgs } from "react-router";
import axios from "axios";

export async function tripPageAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // Monta o FormData para envio ao backend
  const tripData = {
    groupName: String(formData.get("groupName")),
    tripType: String(formData.get("tripType")),
    location: String(formData.get("location")),
    travelersCount: String(formData.get("travelersCount")),
    financialProfile: String(formData.get("financialProfile")),
    tripDate: String(formData.get("tripDate")),
    tripPhoto: formData.get("tripPhoto"), // deve ser um File
  };

  console.log("tripData", tripData);

  const data = new FormData();
  data.append("name", tripData.groupName);
  data.append("description", tripData.tripType);
  data.append("country", "Brasil"); // ajuste conforme necessário
  data.append("city", tripData.location);
  data.append("limitTravelers", tripData.travelersCount);
  data.append("financialProfile", tripData.financialProfile);
  data.append("startDate", tripData.tripDate);
  if (tripData.tripPhoto && tripData.tripPhoto instanceof File && tripData.tripPhoto.size > 0) {
    data.append("imageTravel", tripData.tripPhoto);
  }

  console.log("data", data);
  const apiUrl = `${import.meta.env.VITE_LOCAL_API}/api/travel/create`;

  try {
    const response = await axios.post(
      apiUrl,
      data,
      {
        withCredentials: true,
      }
    );

    // Redireciona para a home ou página de viagens após criar
    if (response.data) {
      return redirect("/");
    }
  } catch (error: any) {
    console.error("Error: ", error);
    // Você pode retornar um erro para mostrar no formulário, se quiser
    return { error: "Erro ao criar viagem" };
  }
}