const Contact = () => {
  return (
    <div className="px-5 pt-[60px] sm:pt-[100px] pb-[120px]">
      <div className="max-w-[1412px] mx-auto">
        <div className="bg-[#00000033] p-9 sm:p-[60px] flex-wrap flex justify-between items-center gap-10">
          <div className="text-4xl sm:text-[60px] text-white">
            Have an idea? <span className="text-[#C5EC73]">Let's talk.</span>
          </div>
          <button className="bg-[#C5EC73] px-[60px] h-12"> Buy $MUBOT</button>
        </div>
        <div className="h-[210px]">
          <img
            className="w-full h-full object-cover"
            src="/assets/talk.gif"
            alt="talk"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
