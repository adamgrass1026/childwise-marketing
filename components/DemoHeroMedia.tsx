import Image from "next/image";

// Hero media for /demo. Pass videoSrc to swap the image for a video with a
// one-line change at the call site — no layout edits needed.
export default function DemoHeroMedia({
  imageSrc,
  videoSrc,
  poster,
  alt,
  width,
  height,
}: {
  imageSrc?: string;
  videoSrc?: string;
  poster?: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  if (videoSrc) {
    return (
      <div className="rounded-[18px] overflow-hidden border border-white/15 shadow-[0_28px_72px_rgba(0,0,0,.45)]">
        {/* preload=metadata + poster: nothing heavy downloads until tap —
            most /demo traffic is mobile. */}
        <video
          src={videoSrc}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label={alt}
          className="w-full h-auto"
        />
      </div>
    );
  }
  if (!imageSrc) return null;
  return (
    <div className="rounded-[18px] overflow-hidden border border-white/15 shadow-[0_28px_72px_rgba(0,0,0,.45)]">
      <Image src={imageSrc} alt={alt} width={width} height={height} className="w-full h-auto" priority />
    </div>
  );
}
