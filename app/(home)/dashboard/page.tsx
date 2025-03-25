import { getCookies } from "@/app/actions/actions";
import DashboardBody from "@/components/dashboard/dashboard-body";
import { PageHeader } from "@/components/page-header";

export default async function DashboardPage() {
  const token = await getCookies();

  return (
    <div className="flex min-h-screen flex-col py-8 pt-6">
      <div>
        <PageHeader
          heading="Dashboard"
          text="Create and manage your shortened URLs."
        />
        <DashboardBody token={token} />
      </div>
    </div>
  );
}
