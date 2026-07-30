import { getChatGPTUser, requireChatGPTUser } from "@/app/chatgpt-auth";

export const EDITORIAL_CONSOLE_PATH =
  "/samet-editorial-publishing-console-7f3a9c2e";

function configuredAdminEmail() {
  return (process.env.ADMIN_EMAIL ?? "temasr3@gmail.com").toLowerCase();
}

export async function requireAdmin() {
  const user = await requireChatGPTUser(EDITORIAL_CONSOLE_PATH);
  if (user.email.toLowerCase() !== configuredAdminEmail()) {
    throw new Error("Bu hesap yönetim paneli için yetkili değil.");
  }
  return user;
}

export async function assertAdminAction() {
  const user = await getChatGPTUser();
  if (!user || user.email.toLowerCase() !== configuredAdminEmail()) {
    throw new Error("Yetkisiz işlem.");
  }
  return user;
}
