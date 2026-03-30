import CompanionsList from "@/components/CompanionsList";
import { getUserSessions } from "@/lib/actions/companion.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const SessionsPage = async () => {
  const user = await currentUser();
  if (!user) redirect('/sign-in');

  const recentSessionsCompanions = await getUserSessions(user.id);

  return (
    <main>
      <section className="flex items-center justify-between mt-2">
        <h1>Recent Sessions</h1>
      </section>

      <section className="grid grid-cols-1 gap-6">
        <CompanionsList
          title="Recent Sessions"
          companions={recentSessionsCompanions}
          classNames="w-full"
        />
      </section>
    </main>
  );
};

export default SessionsPage;
