import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import TableList from "@/components/tableList";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 ">
        {/* <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Table Page</h1>
        </div> */}
          <TableList/>
      </section>
    </DefaultLayout>
  );
}
