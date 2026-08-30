import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CSIS Contributor Form | CSIS · Prayukti VLab",
  description: "Apply to contribute to CSIS projects at MMMUT.",
};

export default function JoinContributorPage() {
  return (
    <div className="w-full h-screen overflow-hidden bg-[#0D0D0D] relative pt-[120px]">
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <iframe
        src="https://tally.so/r/Zjrkqy?formEventsForwarding=1"
        data-tally-src="https://tally.so/r/Zjrkqy?formEventsForwarding=1"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="CSIS Contributor Form"
        className="w-full h-full border-0"
      ></iframe>
    </div>
  );
}
