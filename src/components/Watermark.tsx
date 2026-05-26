import { images } from '../utils/images'

export default function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[2] overflow-hidden"
    >
      {/* Center */}
      <img
        src={images.bonoanLabs}
        alt=""
        className="absolute left-1/2 top-1/2 h-auto w-[min(480px,80vw)] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.14] md:w-[560px] md:opacity-[0.16]"
        draggable={false}
      />
      {/* Upper */}
      <img
        src={images.bonoanLabs}
        alt=""
        className="absolute left-1/2 top-[18%] h-auto w-[min(320px,55vw)] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.09] md:opacity-[0.11]"
        draggable={false}
      />
      {/* Lower */}
      <img
        src={images.bonoanLabs}
        alt=""
        className="absolute bottom-[12%] left-1/2 h-auto w-[min(320px,55vw)] -translate-x-1/2 translate-y-1/2 select-none opacity-[0.09] md:opacity-[0.11]"
        draggable={false}
      />
    </div>
  )
}
