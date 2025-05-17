export async function editProfileAction({ request }: { request: Request }) {
  const formData = await request.formData();

  // Obter dados do formulário
  const profileData = {
    name: formData.get("name"),
    bio: formData.get("bio"),
    birthDate: formData.get("birthDate"),
    travelPreferences: formData.get("travelPreferences"),
    budget: formData.get("budget"),
    companionPreferences: formData.get("companionPreferences"),
    photo: formData.get("photo"),
  };

  // Aqui você faria a chamada à API para atualizar o perfil
  console.log("Dados do perfil para atualizar:", profileData);

  // Simulando uma resposta bem-sucedida
  return { ok: true };
}
