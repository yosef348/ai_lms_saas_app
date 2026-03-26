import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";
import {getAllCompanions, getRecentSessions, getUserCompanions, getUserSessions} from "@/lib/actions/companion.actions";
import {getSubjectColor} from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DashboardEnhancements from "@/components/dashboard/DashboardEnhancements";
import Link from "next/link";

const Page = async () => {
   const user = await currentUser();
    if(!user) redirect('/sign-in');

    const companions = await getUserCompanions(user.id);
    const recentSessionsCompanions = await getUserSessions(user.id);

  return (
    <main>
      <DashboardEnhancements userId={user.id} />

      <section className="flex items-center justify-between mt-2">
        <h1>Popular Companions</h1>
        <Link href="/companions" className="hidden sm:inline">
          <button className="btn-primary px-4 py-2">View All</button>
        </Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companions.slice(-3).map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

        <section className="home-section">
            <CompanionsList
                title="Recently completed sessions"
                companions={recentSessionsCompanions}
                classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page