import type { SVGProps } from 'react';

function Base(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );
}

export function StrategyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.25" />
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 3.75V6M12 18v2.25M20.25 12H18M6 12H3.75" />
    </Base>
  );
}

export function OrgModelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="9" y="3.25" width="6" height="4.5" rx="1.4" />
      <rect x="3.25" y="16.25" width="6" height="4.5" rx="1.4" />
      <rect x="14.75" y="16.25" width="6" height="4.5" rx="1.4" />
      <path d="M12 7.75V11M12 11H6.25v5.25M12 11h5.75v5.25" />
    </Base>
  );
}

export function ExecutionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M3.75 16.5 9.5 10.75l3.5 3.5 7.25-7.25" />
      <path d="M15.25 6.5h5v5" />
      <path d="M3.75 20.25h16.5" />
    </Base>
  );
}

export function ProjectsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <rect x="4.5" y="4.5" width="15" height="16.5" rx="2" />
      <path d="M9 3.25h6a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 .75-.75Z" />
      <path d="m8.25 12.75 2 2 4.5-4.5M8.25 17.25h7.5" />
    </Base>
  );
}

export function FinanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <path d="M4.25 20.25h15.5" />
      <rect x="6.25" y="12.25" width="3" height="8" rx="0.6" />
      <rect x="10.5" y="8.25" width="3" height="12" rx="0.6" />
      <rect x="14.75" y="4.25" width="3" height="16" rx="0.6" />
    </Base>
  );
}

export function PeopleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Base {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.25 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="8" r="2.4" />
      <path d="M15.5 14.2c2.6.3 4.5 2.6 4.5 5.3" />
    </Base>
  );
}
