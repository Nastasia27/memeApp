import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
  } from "@heroui/modal";
import { Button } from "@heroui/button";
import { Meme } from "@/data/defaultMemes";
import { Input } from "@heroui/input";
import { useState } from "react";

type ModalWindowProps = {
    meme: Meme;
    onSave: (updatedMeme: Meme) => void;
  };
  
  
  export default function ModalWindow({meme, onSave}: ModalWindowProps) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [name, setName] = useState(meme.name);
    const [image, setImage] = useState(meme.image);
    const [likes, setLikes] = useState(meme.likes);

    const handleSave = (onClose: () => void) => {
        if (!name || name.length < 3 || image.length === 0 || likes < 0 || likes > 99) {
            alert('Invalid input!');
            return;
        }
        const updatedMeme: Meme = {
            ...meme,
            name,
            image,
            likes,
        };
        onSave(updatedMeme);
        onClose();
    }

    return (
      <>
        <Button onPress={onOpen} color="primary" size="sm">Edit</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">Edit Meme #{meme.id}</ModalHeader>
                <ModalBody>
                <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isRequired
              />
              <Input
                label="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                isRequired
              />
              <Input
                label="Likes"
                type="number"
                value={likes.toString()}
                onChange={(e) => setLikes(Number(e.target.value))}
                min={0}
                max={99}
                isRequired
              />

                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                    <Button 
                    color="primary" 
                    onPress={() => {
                        handleSave(onClose);
                    }}
                    >
                        Edit
                    </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }
  