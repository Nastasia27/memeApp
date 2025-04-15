import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import TableList from "@/components/tableList";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        {/* <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>List Page</h1>
        </div>
        <div>
          <TableList/>
        </div> */}
      </section>
    </DefaultLayout>
  );
}
