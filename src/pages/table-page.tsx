import DefaultLayout from "@/layouts/default";
import TableList from "@/components/tableList";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 ">
          <TableList/>
      </section>
    </DefaultLayout>
  );
}
