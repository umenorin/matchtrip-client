import { redirect } from "react-router-dom";

export async function matchPageAction({ request }) {
  const formData = await request.formData();
  const actionType = formData.get("action"); // "like", "dislike", "refresh"
  const groupId = formData.get("groupId");

  // Aqui você pode fazer chamadas para API/backend conforme a ação
  // Exemplo:
  // if (actionType === "like") await api.likeGroup(groupId);
  // if (actionType === "dislike") await api.dislikeGroup(groupId);
  // if (actionType === "refresh") await api.refreshGroupList();

  // Retorne dados ou redirecione conforme necessário
  return null;
}