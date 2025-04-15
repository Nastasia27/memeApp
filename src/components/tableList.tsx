import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    getKeyValue,
  } from "@heroui/table";
import { defaultMemes } from "@/data/defaultMemes";
import { Link } from "@heroui/link";
import { useState, useEffect } from "react";
import ModalWindow from "./modal";
import { Meme } from "@/data/defaultMemes";

const columns = [
  {
      key: "id",
      label: "ID",
  },
  {
      key: "name",
      label: "NAME",
  },
  {
      key: "image",
      label: "LINK",
  },
  {
      key: "likes",
      label: "LIKES",
  },
  {
      key: "action",
      label: "ACTIONS",
  },
];
  
export default function TableList() {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('memes');
    if (stored) {
      setMemes(JSON.parse(stored));
    } else {
      localStorage.setItem('memes', JSON.stringify(defaultMemes));
      setMemes(defaultMemes);
    }
  }, [])

  const updateMeme = (updatedMeme: Meme) => {
    const updatedMemes = memes.map((m) => (m.id === updatedMeme.id ? updatedMeme : m));
    setMemes(updatedMemes);
    localStorage.setItem('memes', JSON.stringify(updatedMemes));
  }

  return (
      <Table aria-label="table" className="shadow-none ">
        <TableHeader columns={columns} >
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={memes} >
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => {
                if (columnKey === 'image') {
                  const link = getKeyValue(item, columnKey) as string;
                  return (
                    <TableCell title={link}>
                        <Link href={link} className="hidden sm:block">
                          {link}
                        </Link>
                        <Link href={link} className="block sm:hidden">
                          {link.length > 10 ? link.slice(0, 10) + '...' : link}
                        </Link>
                    </TableCell>
                  );
                }

                if (columnKey === 'action') {
                  return (<TableCell>
                    <ModalWindow 
                      meme={item}
                      onSave={updateMeme} 
                    />
                  </TableCell>
                )}

                return <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                }}
            </TableRow>
          )}
        </TableBody>
      </Table>

  );
}
  