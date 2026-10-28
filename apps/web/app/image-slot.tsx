import Image from "next/image";

export function ImageSlot({
  src,
  alt,
  className,
  placeholder,
}: {
  src?: string;
  alt: string;
  className: string;
  placeholder: string;
}) {
  if (!src) {
    return <div className={`placeholder ${className} bite`}>{placeholder}</div>;
  }
  return (
    <div className={`image-slot ${className} bite`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 700px) 40vw, 100vw" />
    </div>
  );
}
