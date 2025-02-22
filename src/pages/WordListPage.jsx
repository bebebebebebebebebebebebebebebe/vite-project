import { useState } from "react";
import WordItems from "../components/WordItems";
import SentenceModal from "../components/SentenceModal";
import ModalContent from "../components/ModalContent";

const WordListPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <WordItems toggleOpen={toggleOpen} />
      <SentenceModal isOpen={isOpen} onClose={onClose}>
        <ModalContent />
      </SentenceModal>
    </>
  )
}

export default WordListPage