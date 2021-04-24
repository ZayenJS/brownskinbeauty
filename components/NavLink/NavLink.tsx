import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  href: string;
  activeClassName?: string;
}

const NavLink: FC<NavLinkProps> = ({ href, children, activeClassName }) => {
  const router = useRouter();
  //@ts-ignore
  let className = children.props.className ?? '';

  if (router.pathname === href) {
    className = `${className} ${activeClassName ?? 'active'}`;
  }

  //@ts-ignore
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default NavLink;
