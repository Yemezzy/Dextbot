import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { FaTelegram, FaCopy } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Startpage = () => {
   const [price, setPrice] = useState("")
   const [time, setTime] = useState("")
   const [place, setPlace] = useState("")
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const [addy, setAddy] = useState("");
  const [error, setError] = useState('')
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const username = "bird2833";
  const message = encodeURIComponent(`Hello, I made payment for trending and this is my transaction hash:`);

  const handleClick = () => {
    window.open(`https://t.me/${username}?start=${message}`, "_blank");
  };

  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const handleCopy = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // Reset after 2s
        });
    }
  };

  const CloseShow = () => {
    
       if (addy == "") {
         setView(false)
         setError('Select a payment method')
       } else {
             setShow(false);
             setOpen(true)
             setTimeout(() => {
        setView(true)
         setOpen(false)
             }, 3000);
        }

  }
  
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


   const handleOpen = () => {
     
      if (price, place, time === "") {
          setOpen(false);
      } else {
          setOpen(true);
        setTimeout(() => {
               setOpen(false)
               setShow(true)
             }, 2000);
      }
  
    };

   const handleClose = () => {
     setOpen(false);
   };

useEffect(() => {
 if ((time === "6 Hours Trending") & (place === "Top #1 Spot")) {
   setPrice("$600");
 }
 if ((time === "6 Hours Trending") & (place === "Top #2 Spot")) {
   setPrice("$450");
 }
 if ((time === "6 Hours Trending") & (place === "Top #3 Spot")) {
   setPrice("$300");
 }
   
   
 if ((time === "12 Hours Trending") & (place === "Top #1 Spot")) {
   setPrice("$1500");
 }
 if ((time === "12 Hours Trending") & (place === "Top #2 Spot")) {
   setPrice("$1000");
 }
 if ((time === "12 Hours Trending") & (place === "Top #3 Spot")) {
   setPrice("$800");
 }
   
   
 if ((time === "24 Hours Trending") & (place === "Top #1 Spot")) {
   setPrice("$3000");
 }
 if ((time === "24 Hours Trending") & (place === "Top #2 Spot")) {
   setPrice("$2000");
 }
 if ((time === "24 Hours Trending") & (place === "Top #3 Spot")) {
   setPrice("$1500");
 }
   
   
 if ((time === "48 Hours Trending") & (place === "Top #1 Spot")) {
   setPrice("$6000");
 }
 if ((time === "48 Hours Trending") & (place === "Top #2 Spot")) {
   setPrice("$5000");
 }
 if ((time === "48 Hours Trending") & (place === "Top #3 Spot")) {
   setPrice("$4000");
 }
    }, );

       

   

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

            <Link to="https://t.me/Trendmindsmarketing">
              <button className="py-2 md:block hidden text-sm bg-[#1BB8D8] text-white rounded-full px-5">
                Telegram
              </button>

              <FaTelegram className="text-4xl text-[#1BB8D8] md:hidden block" />
            </Link>
          </div>
        </nav>

        <div>
          <p className="md:text-xl  font-bold md:mt-5 mt-3 uppercase">
            DEXTBOT Trending Details
          </p>
          <p className="text-sm md:text-base">
            Quickly get your token trending among DEXTools' top pairs. Complete
            all information accurately to secure a spot in the next trending
            pairs.
          </p>

          <div className="md:grid grid-cols-2">
            <section className="md:mt-10 mt-5 font-semibold text-sm md:text-base">
              <div>
                <p>PROJECT NAME</p>
                <input
                  type="text"
                  className="md:w-[90%] w-full mb-3 p-2 border-2 border-black outline-none "
                />
              </div>
              <div>
                <p>CONTRACT ADDRESS</p>
                <input
                  type="text"
                  className="md:w-[90%] w-full mb-3 p-2 border-2 border-black outline-none "
                />
              </div>
              <div>
                <p>TOKEN CHAIN</p>
                <input
                  type="text"
                  className="md:w-[90%] w-full p-2 mb-3 border-2 border-black outline-none "
                />
              </div>
              <div>
                <p>DEXTOOL LINK</p>
                <input
                  type="text"
                  className="md:w-[90%] w-full p-2 border-2 border-black outline-none "
                />
              </div>
            </section>

            <section className="md:mt-10 mt-3 font-semibold">
              <div>
                <p>DURATION</p>
                <select
                  onChange={(event) => setTime(event.target.value)}
                  name=""
                  id=""
                  className="md:w-[90%] w-full mb-3 h-[45px] px-2 border-2 border-black outline-none "
                >
                  <option value="">--- Select Duration ---</option>
                  <option value="6 Hours Trending">6 Hours Trending</option>
                  <option value="12 Hours Trending">12 Hours Trending</option>
                  <option value="24 Hours Trending">24 Hours Trending</option>
                  <option value="48 Hours Trending">48 Hours Trending</option>
                </select>
                <p>{}</p>
              </div>
              <div>
                <p>PLACEMENT</p>
                <select
                  onChange={(event) => setPlace(event.target.value)}
                  name=""
                  id=""
                  className="md:w-[90%] w-full mb-3 h-[45px] px-2 border-2 border-black outline-none "
                >
                  <option value="">--- Select Placement ---</option>
                  <option value="Top #1 Spot">Top #1 - #3 Spot</option>
                  <option value="Top #2 Spot">Top #4 - #6 Spot</option>
                  <option value="Top #3 Spot">Top #7 - #10 Spot</option>
                </select>
              </div>
              <div>
                <p>PRICE</p>
                <div>
                  <input
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    type="text"
                    className="md:w-[90%] w-full p-2 mb-3 border-2 border-black outline-none "
                  />
                </div>
              </div>
              {/* <div>
 <p>DEXTOOL LINK</p>
    <input type="text" className='w-[90%] p-2 border-2 border-black outline-none '/>
 </div> */}
            </section>

            <p className="md:mt-5 mt-2 text-sm md:text-base md:pr-0 pr-2">
              It’s big C5 bot programmed with a new smart algorithm to keep
              trending stable which helps In volume boosting and LP increase.
            </p>
          </div>
          <button
            onClick={handleOpen}
            className="py-3 text-sm bg-[#1BB8D8] text-white rounded-md px-10 mt-3 w-full md:w-fit md:mt-10"
          >
            Procede to payment
          </button>
        </div>
      </div>
      <div className='px-2'>
      <Modal
        open={show}
       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <p className='font-bold'>  Payment Details</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div>
                <section>
                <p>Payment Method</p>
                  <select name="" id="" onChange={(event) => setAddy(event.target.value)} className='border-2 border-black w-full p-2'>
                    <option value="1">--- select payment method ---</option>
                    <option value="1">Eth</option>
                    <option value="2">Bnb</option>
                    <option value="3">Solana</option>
                    <option value="4">Usdt (trc20)</option>
                  </select>
             </section>
                <section className='mt-3'>
                <p>Payment Address</p>
                <input type="text" placeholder='--- payment address ---' className='border-2 border-black w-full p-2 text-black' readOnly value={addy} />
             </section>
                <section className='mt-3'>
                <p>Price</p>
                <input type="text" className='border-2 border-black w-full p-2' readOnly value={price}/>
             </section>
                <button onClick={CloseShow} className="py-3 text-sm bg-[#1BB8D8] text-white rounded-md px-10 w-full mt-3">
                  I have made payment
                </button>
                <p className='text-xs mt-2'>Note: Endavour to copy the correct address to prevent loss of funds.</p>
           </div>
          </Typography>
        </Box>
      </Modal>
                </div>
      <div className='px-2'>
      <Modal
        open={show}
       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <p className='font-bold'>  Payment Details</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div>
                <section>
                  <div className='flex items-center justify-between'>
                    <p>Payment Method</p>
                    <p className='text-xs text-red-600'>{error}</p>
              </div>
                  <select name="" required id="" onChange={(event) => setAddy(event.target.value)} className='border-2 border-black w-full p-2'>
                    <option value="1">--- select payment method ---</option>
                    <option value="0x6274D71CfA2924d6a93A3BeB6bb0Ebf4a58A5027">Eth</option>
                    <option value="4pa4PjTPbb1DMZD2Qm3JQ4bZqaU5MeiVZwnjtZceLYvd">Solana</option>
                    <option value="0x6274D71CfA2924d6a93A3BeB6bb0Ebf4a58A5027">Bnb</option>
                    <option value="THHx2C1kaKv7mgP1twPoh8HTFPSf6EQu6X">Usdt (trc20)</option>
                    <option value="0x6274D71CfA2924d6a93A3BeB6bb0Ebf4a58A5027">Base</option>
                  </select>
             </section>
                <section className='mt-3'>
                  <div className='flex justify-between items-center'>
                         <p>Payment Address</p>
                                  <div
          onClick={handleCopy}
          className=" cursor-pointer text-gray-600 hover:text-black"
        >
          {copied ? (
            <span className="text-green-600 font-medium text-sm">Copied ✅</span>
          ) : (
            <FaCopy size={15} />
          )}
        </div>
             </div>
                <input required ref={inputRef} type="text" placeholder='--- payment address ---' className='border-2 border-black w-full p-2 text-black' readOnly value={addy} />
             </section>
                <section className='mt-3'>
                <p>Price</p>
                <input type="text" className='border-2 border-black w-full p-2' readOnly value={price}/>
             </section>
                <button onClick={CloseShow} className="py-3 text-sm bg-[#1BB8D8] text-white rounded-md px-10 w-full mt-3">
                  I have made payment
                </button>
                <p className='text-xs mt-2'>Note: Endavour to copy the correct address to prevent loss of funds.</p>
           </div>
          </Typography>
        </Box>
      </Modal>
                </div>
      <div className='px-2'>
      <Modal
        open={view}
       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <p className='font-bold'>Verify  Payment</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div>
                <p>Kindly Provide proof of payment transaction hash to telegram support for proper payment verification.</p>
                 <button onClick={handleClick} className="py-3 text-sm bg-[#1BB8D8] text-white rounded-md px-10 w-full mt-3">
                  Verify Payment via telegram
                </button>
          </div>
          </Typography>
        </Box>
      </Modal>
                </div>
      <div className="md:mt-14 text-sm md:text-base mt-7 px-5">
        <p className="text-">
          DexTools trending service for the Hot Pairs section which is available
          as a crypto marketing service for tokens and cryptocurrencies. Propel
          your token on DexTools by having sufficient volume, and then right to
          the top of the DexTools trending section (also referred to as the
          DexTools Hot Pairs section)! Buy DexTools trending to start trending
          today with our scheduled DexTools Hot Pairs trending service.
        </p>
        <p className="font-bold text-lg mt-2">
          Promote your project on DexTools by getting it Trending!
        </p>
        <p className="text-xl font-bold mt-10 md:mt-16 uppercase text-center">
          How dextbot works?
        </p>

        <div>
          <ol className="mt:mt-5 mt-3 md:text-lg disc px-5">
            <li className="mb-2">Fill In All Details Correctly.</li>
            <li className="mb-2">
              Select the suitable Placement and Duration for trending.
            </li>
            <li className="mb-2">
              Throughly comfirm all details are written correctly.
            </li>
            <li className="mb-2">
              Trending is done depending on the pressure secured on bots once
              done filling information trending will begin in 20 minutes max.
            </li>
            <li className="mb-2">
              The bot is always active and works very effectively.
            </li>
          </ol>
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

        <div className="md:mt-10 border-t py-5  px-2">
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

export default Startpage
