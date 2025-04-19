export default function Home() {
  return (
    <div className="p-[70px]">
      <div className="flex mx-auto ">
        {/* text part */}
        <div className="flex-1">
          <div className="text-[50px] font-semibold">Craft what you think</div>
          <div className="text-[20px]">
            What you hear becomes the material of your mind, and it builds who
            you are.
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
