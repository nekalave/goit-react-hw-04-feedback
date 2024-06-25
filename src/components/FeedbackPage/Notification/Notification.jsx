import React from 'react';

const Notification = ({ message, total}) => (
  <>
  {total === 0 && (
      <div>{message}</div>
    )}
  </>
);

export default Notification;
