import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";
import { useRouter } from "next/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMathExactHref?: boolean;
}
export function ActiveLink({
  children,
  shouldMathExactHref = false,
  ...rest
}: ActiveLinkProps): JSX.Element {
  let isActive = false;
  const { asPath } = useRouter();
  const { href, as } = rest;

  if (shouldMathExactHref && (href == asPath || as == asPath)) {
    isActive = true;
  }

  if (
    !shouldMathExactHref &&
    (String(asPath).startsWith(String(as)) ||
      String(asPath).startsWith(String(href)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, { color: isActive ? "pink.500" : "gray.50" })}
    </Link>
  );
}
