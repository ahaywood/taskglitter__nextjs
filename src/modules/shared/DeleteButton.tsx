import { useState } from "react";
import { Icon } from "./icon"

interface Props {
  deleteItem: () => void
}

const DeleteButton = ({ deleteItem }: Props) => {
  const [isShowingConfirmation, setIsShowingConfirmation] = useState(false);

  const handleDelete = () => {
    setIsShowingConfirmation(prevValue => !prevValue);
  }

  const cancelDelete = () => {
    setIsShowingConfirmation(false);
  }

  const confirmDelete = () => {
    deleteItem();
    setIsShowingConfirmation(false);
  }

  return (
    <div className="relative">
      <button className="icon-button w-[42px] h-[42px]" onClick={handleDelete}><Icon name="Trash" /></button>
      {isShowingConfirmation && (
        <div className="flex gap-x-4 absolute left-full items-center -top-2 text-white bg-lavenderIndigo rounded-2xl px-6 py-4 tag-left">
          <div className="font-sans">Really?</div>
          <button onClick={confirmDelete} className="rounded-full border-white border-[1px] hover:bg-white hover:text-lavenderIndigo"><Icon name="Check" /></button>
          <button onClick={cancelDelete} className="rounded-full bg-purple border-[1px] border-purple hover:bg-white hover:border-white hover:text-lavenderIndigo"><Icon name="Cancel" /></button>
        </div>
      )}
    </div>
  )
}

export { DeleteButton }