'use server';

import { Suspense } from 'react';
import FormPage from './FormPage';
import UserList from './UserList';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-top p-12 bg-neutral-950'>
      <div>
        <FormPage />
        <Suspense fallback={<p>Loading users...</p>}>
          <UserList />
        </Suspense>
      </div>
    </main>
  );
}
