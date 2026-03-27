import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SubscriptionClient from "@/components/subscription/SubscriptionClient";

export default async function Subscription() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return <SubscriptionClient />;
}