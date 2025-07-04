import { authUser, getAuthUserDetails } from "@/actions/auth";
import { verifyAndAcceptInvitation } from "@/actions/invitations";
import { AgencyForm } from "@/components/forms/agency-form";
import { Plan } from "@/generated/prisma";
import { redirect } from "next/navigation";

interface PageProps {
  searchParams: Promise<{
    plan: Plan;
    state: string;
    code: string;
  }>;
}
export default async function Page(props: PageProps) {
  const agencyId = await verifyAndAcceptInvitation();
  console.log(agencyId);

  const user = await getAuthUserDetails();

  if (agencyId) {
    if (user?.role === "SUBACCOUNT_USER" || user?.role === "SUBACCOUNT_GUEST") {
      return redirect("/sub-accounts");
    }
    if (user?.role === "AGENCY_ADMIN" || user?.role === "AGENCY_OWNER") {
      const { plan, state, code } = await props.searchParams;

      if (plan) {
        return redirect(`/agency/${agencyId}/billing?plan=${plan}`);
      }

      if (state) {
        const statePath = state.split("__")[0];
        const stateAgencyId = state.split("___")[1];
        if (!stateAgencyId) return <div>Unauthorized page here.</div>;

        return redirect(`/agency/${stateAgencyId}/${statePath}?code=${code}`);
      } else {
        return redirect(`/agency/${agencyId}`);
      }
    } else {
      return <div>Unauthorized page here</div>;
    }
  }

  const authyUser = await authUser();

  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Set Up Your{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Agency Profile
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete your agency information to unlock all Vectora features and
            start building amazing websites.
          </p>
        </div>
        <AgencyForm initialData={{ companyEmail: authyUser.user.email }} />
      </div>
    </main>
  );
}
