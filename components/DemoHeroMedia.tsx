import Image from "next/image";

// Hero media for /demo. Pass videoSrc to swap the image for a video with a
// one-line change at the call site — no layout edits needed.
export default function DemoHeroMedia({
  imageSrc,
  videoSrc,
  alt,
  width,
  height,
}: {
  imageSrc?: string;
  videoSrc?: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  if (videoSrc) {
    return (
      <div className="rounded-[18px] overflow-hidden border border-white/15 shadow-[0_28px_72px_rgba(0,0,0,.45)]">
        <video src={videoSrc} controls playsInline className="w-full h-auto" />
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
