import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <span className={title()}>
          Edit memes.
        </span>
        <span className={title()}>
          Save favourites.
        </span>
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Build your own&nbsp;</span>
          <span className={title({ color: "violet" })}>meme guide.&nbsp;</span>
          <br />
        </div>
      </section>
    </DefaultLayout>
  );
}
