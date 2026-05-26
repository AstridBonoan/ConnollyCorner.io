import { images } from '../utils/images'

export default function Watermark() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src={images.bonoanLabs}
          alt=""
          className="h-auto w-[min(420px,70vw)] opacity-[0.06] select-none md:w-[520px] md:opacity-[0.07]"
          draggable={false}
        />
      </div>
    </div>
  )
}
