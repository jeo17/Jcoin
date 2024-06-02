// useSnackbar.ts
import { useState, useEffect, useCallback } from 'react';

interface UseSnackbarResult {
  visible: boolean;
  message: string;
  showSnackbar: (msg: string) => void;
  hideSnackbar: () => void;
}

const useSnackbar = (): UseSnackbarResult => {
  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const showSnackbar = useCallback((msg: string) => {
    setMessage(msg);
    setVisible(true);
  }, []);

  const hideSnackbar = useCallback(() => {
    setVisible(false);
    setMessage('');
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        hideSnackbar();
      }, 3000); // Snackbar will hide after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [visible, hideSnackbar]);

  return { visible, message, showSnackbar, hideSnackbar };
};

export default useSnackbar;
