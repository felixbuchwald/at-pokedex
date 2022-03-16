import { useContext } from 'react';
import { DetailsContext } from '../context/DetailsContext';

export const useDetailsContext = () => {
  const context = useContext(DetailsContext);

  if (!context) {
    throw Error('useDetailsContext must be inside an DetailsContextProvider');
  }

  return context;
};
