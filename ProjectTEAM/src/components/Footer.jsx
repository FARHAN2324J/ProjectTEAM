export default function Footer() {
    return (
      <div className="bg-[#161617cc] gap-10 py-10 grid grid-cols-1 text-[#fffc] sm:grid-cols-2">
        <div className="flex flex-col gap-6 px-10">
          <span className="text-[#fff]">Follow Us</span>
          <div className="flex items-center gap-3">
            <img src="/src/FooterIcons/mobile_16076069.png" className="w-[7%] sm:w-[8%] md:w-[8%] lg:w-[5%] xl:w-[4%]" alt="" /><span>+1254298</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/src/FooterIcons/telegram_2111646.png" className="w-[7%] sm:w-[8%] md:w-[8%] lg:w-[5%] xl:w-[4%]" alt="" /><span>@confused4298</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="/src/FooterIcons/instagram_2111463.png" className="w-[7%] sm:w-[8%] md:w-[8%] lg:w-[5%] xl:w-[4%]" alt="" /><span>@confused4298</span>
          </div>
        </div>
        <div  className="flex justify-start gap-2 flex-col px-10">
          <span className="text-[#fff]">About</span>
          <span id="about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestias fugit similique officiis quas iste, at et quasi unde eaque! Ea dolores eius quod. Consequuntur quod porro delectus deleniti earum deserunt obcaecati esse dolorum sapiente fugiat eligendi architecto dolores dolorem dignissimos aliquam ad quasi cum consequatur sed nam, aut maiores.</span>
        </div>
      </div>
    );
  }
  