import Script from "next/script";

export default function JoinTeamPage() {
  return (
    <div className="w-full h-screen overflow-hidden bg-[#0D0D0D] relative pt-[80px]">
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      <iframe
        data-tally-src="https://tally.so/r/BzYED7"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="CSIS Induction 2026-27"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
}
