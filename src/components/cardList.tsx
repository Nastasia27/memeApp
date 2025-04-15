import { useEffect, useState } from "react";
import { Meme, defaultMemes } from "@/data/defaultMemes";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";


export default function CardList() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("memes");
    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      localStorage.setItem("memes", JSON.stringify(defaultMemes));
      setMemes(defaultMemes);
    }
  }, []);

  return (
    <div className="gap-8 grid grid-cols-1 sm:grid-cols-4">
      {memes.map((meme) => (
        <Card key={meme.id} className="w-full p-2 shadow-[2px_4px_2px_-1px_rgba(0,0,0,0.1)]">
          <CardHeader className="flex justify-center">
            <Image
              src={meme.image}
              alt={meme.name}
              className="object-cover rounded-none h-44"
              width="100%"
            />
          </CardHeader>
          <CardBody className="pt-0">
            <h4 className="font-bold text-lg ">{meme.name}</h4>
            
            <p className="text-sm text-gray-600 flex items-center">
            <img src="/heart_icon.svg" alt="heart_icon" className="h-6"/>
                Likes: {meme.likes}</p>
          </CardBody>
          <CardFooter className="pt-0">
            <Link
              href={meme.image}
              target="_blank"
              color="primary"
              className="text-sm hover:underline"
            >
              View image
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}