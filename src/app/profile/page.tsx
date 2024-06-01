
import React from 'react';

import { Profile } from '@/src/components';
import { AuthComponent } from '@/src/components/AuthComponent';


const ProfilePage: React.FC = () => {
  return (
    <AuthComponent>
      <Profile />
    </AuthComponent>
  );
};

export default ProfilePage;