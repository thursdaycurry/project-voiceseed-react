export default function Home() {
  return (
    <div className="p-[70px]">
      <div className="flex mx-auto ">
        {/* text part */}
        <div className="flex-1">
          <div className="text-[50px] font-semibold">
            AI-Powered Text-to-Speech
          </div>
          <div className="text-[20px]">
            Plant good voices. Grow your mind. Become who you're meant to be.
          </div>
        </div>

        {/* illustration part */}
        <div className="flex-1 ">
          <img
            className="max-h-[420px] object-contain "
            src="src/assets/graphics/graphic_happyListener.jpg"
          />
        </div>
      </div>
    </div>
  );
}
