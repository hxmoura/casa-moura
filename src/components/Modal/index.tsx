import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  MouseEvent,
} from "react";

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export default function Modal({
  openModal,
  setOpenModal,
  children,
}: ModalProps) {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  function handleCloseModal(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      setOpenModal(false);
    }
  }

  if (!openModal) {
    return null;
  }

  return (
    <section
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-center justify-center z-50"
      onClick={handleCloseModal}
    >
      {children}
    </section>
  );
}
