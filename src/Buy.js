import React from 'react'
import { Link, redirect } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FaTelegram } from 'react-icons/fa';



const Buy = () => {

   

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
       setOpen(true);
       setTimeout(() => {
          window.location.href = "https://t.me/DEXTBOTALLIANCE";
       }, 3000);

     
     };
 
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
      <div className="px-5">
        <nav className="py-5 flex items-center justify-between">
          <Link to="/">
            <section className="flex items-center font-bold">
              <img
                className="w-12"
                src="https://apiable.s3.eu-central-1.amazonaws.com/public/noisyrosehamstergb1xz5/d2db3a30-8a35-457e-ade6-84f6e7677ad4.png"
                alt=""
              />
              <p>
                DEXT<span>BOT</span>
              </p>
            </section>
          </Link>

          <ul className="md:flex gap-2 hidden font-semibold w-[28%] justify-between text-sm">
            <Link to="/">
              <li className="border-b-4 border-[#1BB8D8]">DEXT BOT</li>
            </Link>
            <Link to="https://t.me/dextbuybot">
              <li>BUY BOT</li>
            </Link>
            <Link to="https://t.me/DexTools_Pricebot?start=start">
              <li>PRICE BOT</li>
            </Link>
            <Link to="https://t.me/DEXTNewPairsBot">
              <li>NEW PAIRS BOT</li>
            </Link>
          </ul>

          <div className="flex items-center">
            <Link to="/buy-dextbot">
              <button className="py-2 text-sm bg-[#1BB8D8] text-white rounded-full px-5 mr-2">
                Buy the Bot
              </button>
            </Link>

            <Link to="https://t.me/DEXTBOTALLIANCE">
              <button className="py-2 md:block hidden text-sm bg-[#1BB8D8] text-white rounded-full px-5">
                Telegram
              </button>

              <FaTelegram className="text-4xl text-[#1BB8D8] md:hidden block" />
            </Link>
          </div>
        </nav>

        <div className="mt-5">
          <p className="md:text-xl border-[#1BB8D8] border-b-4 w-fit font-bold">
            BUY DEXTBOT
          </p>
          <p className="text-center font-semibold text-lg mt-10">
            {" "}
            See Available Prices
          </p>

          <div className="md:mt-10 mt-3 md:flex justify-center gap-10">
            <section className="md:w-[25%] border-2 border-[#1BB8D8] px-3 py-5">
              <p className="uppercase text-center mt-5 font-swmibold text-xl">
                Standard Plan
              </p>

              <div className="">
                <div className=" font-extrabold mt-20 flex justify-between border-b-2 border-dotted border-[#1BB8D8]">
                  <p>Price</p>
                  <p>$9,000</p>
                </div>
                <p className="mt-5 text-sm h-[70px]">
                  The Standard DEXTBOT restarts after every 24 hours of
                  trending.
                </p>
                <button
                  onClick={handleOpen}
                  className="py-3 bg-[#1BB8D8] mt-5 text-white  font-bold w-full"
                >
                  BUY NOW
                </button>
              </div>
            </section>
            <section className="md:w-[25%] mt-3 md:mt-0 border-2 border-[#1BB8D8] px-3 py-5">
              <p className="uppercase text-center mt-5 font-swmibold text-xl">
                Advanced Plan
              </p>

              <div className="">
                <div className=" font-extrabold mt-20 flex justify-between border-b-2 border-dotted border-[#1BB8D8]">
                  <p>Price</p>
                  <p>$15,000</p>
                </div>
                <p className="mt-5 text-sm h-[70px]">
                  The Advanced DEXTBOT replaces any project on the current
                  number with your project and maintain the poistion for your
                  project to countinue trending.
                </p>
                <button
                  onClick={handleOpen}
                  className="py-3 bg-[#1BB8D8] mt-5 text-white font-bold w-full"
                >
                  BUY NOW
                </button>
              </div>
            </section>
            <section className="md:w-[25%] mt-3 md:mt-0 border-2 border-[#1BB8D8] px-3 py-5">
              <p className="uppercase text-center mt-5 font-swmibold text-xl">
                pro Plan
              </p>

              <div className="">
                <div className=" font-extrabold mt-20 flex justify-between border-b-2 border-dotted border-[#1BB8D8]">
                  <p>Price</p>
                  <p>$20,000</p>
                </div>
                <p className="mt-5 text-sm h-[70px]">
                  The PRO DEXTBOT Keeps the project trending non-stop on the
                  given position when activated until the bot is Deactivated.
                </p>
                <button
                  onClick={handleOpen}
                  className="py-3 bg-[#1BB8D8] mt-5 text-white  font-bold w-full"
                >
                  BUY NOW
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F5F6] text-sm md:text-base mt-20 py-10 px-5">
        <section>
          <p className="md:text-2xl text-xl font-semibold">
            Get news about cryptocurrencies every day!
          </p>
          <p className="md:mt-5 text-sm md:text-base mt-3">
            Be part of DEXT Force community! The premium community of DEXTools
          </p>

          <div className="md:w-[80%]">
            <p className="md:mt-3 mt-2 text-sm">
              A group of elite traders and investors focused on DeFi. You can
              join now our exclusive Telegram and get all community benefits
              including contests, investing tips and advanced market info. There
              are 3 tiers:
            </p>

            <section className="md:mt-10 mt-5 md:flex flex-cols gap-5">
              <div className="md:w-[30%] rounded-2xl p-3 h-[150px] bg-[#E2E7EC]">
                <p className="text-sm font-semibold mt-2">BUY BOT</p>
                <p className="mt-3 text-xs pr-3">
                  Empower your visibility with DextBuyBot, ascend on
                  Dextools.io, and seize the Trending status. Powered by
                  Dextools.io.
                </p>
              </div>
              <div className="md:w-[30%] mt-3 md:mt-0 p-3 rounded-2xl h-[150px] bg-[#E2E7EC]">
                <p className="text-sm font-semibold mt-2">PRICE BOT</p>
                <p className="mt-3 text-xs pr-3">
                  Get the lattest price of your crypto tokens with the Dextool
                  PRICE BOT
                </p>
              </div>
              <div className="md:w-[30%] mt-3 md:mt-0 p-3 rounded-2xl h-[150px] bg-[#E2E7EC]">
                <p className="text-sm font-semibold mt-2">NEW PAIRS BOT</p>
                <p className="mt-3 text-xs pr-3">
                  Keep track of the newely listed crypto tokens on Dextool, NEW
                  PAIR BOT helps in adding your tokend to Dextool.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-5 md:mt-10 flex gap-2 justify-center items-center">
            <p className="text-sm font-bold uppercase">Inquiries:</p>
            <Link to="https://t.me/DEXTBOTALLIANCE">
              <FaTelegram className="text-2xl text-[#1BB8D8]" />
            </Link>
          </div>
        </section>

        <div className="md:mt-10 border-t py-5 md:py-10 px-2">
          <p className="text-center text-xs">
            All content available on our website, on hyperlinked websites, and
            on applications, forums, blogs, social media accounts and other
            platforms associated with DEXTools is intended solely to provide you
            with general information. We make no warranties of any kind with
            respect to our content, including, but not limited to, the accuracy
            and currency of the information. None of the content we provide
            should be construed as financial, legal or any other type of advice
            on which you may specifically rely for any purpose. Any use or
            reliance you place on our content is solely at your own risk. What
            you should do is conduct your own research, review and analysis, and
            verify our content before relying on it. Trading is a high-risk
            activity that can result in significant losses, so you should
            consult with your financial advisor before making any decisions.
            Nothing on our Site should be considered an invitation or offer to
            take any action
          </p>
        </div>
      </div>

      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}

export default Buy
