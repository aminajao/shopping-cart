'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Logo = () => {
  const router = useRouter();
  return (
    <Link href="/">
      <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className="hidden md:block cursor-pointer"
        width={100}
        height={100}
        src="/images/logo.png"
      />
    </Link>
  );
};

export default Logo;
