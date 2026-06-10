import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex flex-col items-center justify-center p-6 grid-bg">
      <div className="max-w-md w-full text-center space-y-6 relative z-10">
        <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase bg-red-500/5 border border-red-500/10 px-3 py-1 rounded">
          ERR_CODE_404 // NODE_NOT_FOUND
        </span>
        <h1 className="text-4xl md:text-5xl font-sans font-extrabold tracking-tight text-[var(--text)]">
          Page Offline
        </h1>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
          The requested system node or experiment layout does not exist in the virtual laboratory directory.
        </p>
        <div className="pt-4">
          <Link href="/" className="btn-primary text-xs font-mono uppercase tracking-wider py-3.5 px-6">
            RETURN_TO_ROOT // home
          </Link>
        </div>
      </div>
    </main>
  );
}

