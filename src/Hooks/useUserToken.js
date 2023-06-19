import React, { useEffect, useState } from 'react';

const useUserToken = () => {
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'userToken') {
        setUserToken(event.newValue);
      }
    };

    handleStorageChange({ key: 'userToken', newValue: localStorage.getItem('userToken') });

    return () => {
      // Cleanup function (optional)
    };
  }, []);

  console.log(userToken);
  return userToken;
};

export default useUserToken;