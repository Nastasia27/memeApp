import DefaultLayout from "@/layouts/default";
import CardList from "@/components/cardList";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4">
        <CardList/>
      </section>
    </DefaultLayout>
  );
}
