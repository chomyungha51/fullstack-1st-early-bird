const DropdownItem = ({ user, onClick, onClose }) => {
  const onClickAction = () => {
    onClick(user);
    onClose();
  };

  return (
    <div
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
      onClick={onClickAction}
    >
      {user.name}
    </div>
  );
};

export default DropdownItem;
