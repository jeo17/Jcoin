 interface SnackbarProps {
    message: string;
    visible: boolean;
  }
const Snackbar: React.FC<SnackbarProps> = ({ message, visible }) => {
  if (!visible) return null;

  return (
    <div className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
      {message}
    </div>
  );
};

export default Snackbar;
