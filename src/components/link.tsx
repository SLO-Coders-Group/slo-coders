// this is pulled from the MUI Next.js example project
// it combines the MUI Link component with the Next.js Link component
// this is the only place we should be using MuiLink and NextLink directly
// https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/src/Link.tsx

import MuiLink, { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { useRouter } from "next/router";
import { AnchorHTMLAttributes, forwardRef } from "react";

// Add support for the sx prop for consistency with the other branches.
const Anchor = styled("a")({});

interface NextLinkComposedProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<
      NextLinkProps,
      "href" | "as" | "onClick" | "onMouseEnter" | "onTouchStart"
    > {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
}

export const NextLinkComposed = forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>(function NextLinkComposed(props, reference) {
  const { linkAs, locale, prefetch, replace, scroll, shallow, to, ...other } =
    props;

  return (
    <NextLink
      as={linkAs}
      href={to}
      locale={locale}
      passHref
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      <Anchor ref={reference} {...other} />
    </NextLink>
  );
});

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"]; // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<MuiLinkProps, "href">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  reference
) {
  const {
    activeClassName = "active",
    as,
    className: classNameProps,
    href,
    linkAs: linkAsProperty,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    role, // Link don't have roles.
    scroll,
    shallow,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === "string" ? href : href?.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router?.pathname === pathname && activeClassName,
  });

  const isExternal =
    typeof href === "string" &&
    (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return (
        <Anchor className={className} href={href} ref={reference} {...other} />
      );
    }

    return (
      <MuiLink className={className} href={href} ref={reference} {...other} />
    );
  }

  const linkAs = linkAsProperty || as;
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
  };

  if (noLinkStyle) {
    return (
      <NextLinkComposed
        className={className}
        ref={reference}
        {...nextjsProps}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      className={className}
      component={NextLinkComposed}
      ref={reference}
      {...nextjsProps}
      {...other}
    />
  );
});
