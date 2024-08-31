import { redirect } from "react-router-dom";

export async function action({ request }) {
  console.log("🚀 ~ action ~ request:", request);

  return redirect("/");
}
