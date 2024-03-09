import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";

interface ModelProps {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  description: string;
  onChange: (open: boolean) => void;
}

const Modal: React.FC<ModelProps> = ({
  children,
  isOpen,
  title,
  description,
  onChange,
}) => {
  return (
    <div>
      <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-neutral-900/90 background-blur-sm fixed inset-0" />
          <Dialog.Content className="fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%] translate-y-[-50%] bg-neutral-800 p-[25px] focus:outline-none rounded-sm">
            <Dialog.Title className="text-2xl font-bold text-neutral-100 text-center">
              {title}
            </Dialog.Title>
            <Dialog.Description className="text-neutral-300 text-center">
              {description}
            </Dialog.Description>
            <div>{children}</div>
            <Dialog.Close asChild>
              <button className="text-neutral-400 hover:text-white absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none">
                <IoClose />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Modal;
