const LaunchUI = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="2"
  className="w-10 h-10 text-white p-2 bg-gray-900 dark:bg-neutral-800 rounded-full"
  viewBox="0 0 24 24"
>
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

    <defs>
      <linearGradient
        id="paint0_linear_1_2990"
        x1={3.00003}
        y1={8.25}
        x2={10.0952}
        y2={20.6917}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="currentColor" stopOpacity={0.6} />
        <stop offset={1} stopColor="currentColor" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default LaunchUI;
