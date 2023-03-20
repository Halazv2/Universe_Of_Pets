import React, {ReactNode} from 'react';
import Link from 'next/link';

interface AppNavLinkProps {
  href: string;
  children: ReactNode;

  [x: string]: any;
}

const AppNavLink = React.forwardRef(
  (props: AppNavLinkProps, ref: React.Ref<HTMLAnchorElement>) => {
    const {href = '/', other, children} = props;
    return (
      <Link data-testid='custom-link' href={href}>
        <a ref={ref} style={{textDecoration: 'none'}} {...other}>
          {children}
        </a>
      </Link>
    );
  },
);

export default AppNavLink;
