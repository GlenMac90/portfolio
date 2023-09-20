"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { blueDial, redDial } from "@/public/png-icons";

const ErrorScreenDials = () => {
  return (
    <>
      <motion.div
        className="absolute z-10 flex rounded-full"
        initial={{ y: "1.8rem", x: "-3.5rem" }}
        animate={{ rotate: -360, y: "1.8rem", x: "-3.5rem" }}
        transition={{
          duration: 1,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src={blueDial}
          alt="blue dial"
          height={40}
          width={40}
          className="rounded-full"
        />
      </motion.div>
      <motion.div
        className="absolute z-10 flex rounded-full"
        initial={{ y: "1.1rem", x: "-0.5rem" }}
        animate={{ rotate: 360, y: "1.1rem", x: "-0.5rem" }}
        transition={{
          duration: 0.7,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <Image
          src={redDial}
          alt="red dial"
          height={40}
          width={40}
          className="rounded-full"
        />
      </motion.div>
    </>
  );
};

const ErrorGraphic = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute translate-x-[-6rem] translate-y-[-7rem]">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((puff) => (
          <div key={puff} className="smoke_list z-10"></div>
        ))}
      </div>
      <ErrorScreenDials />
      <svg
        width="743"
        height="579"
        viewBox="0 0 743 579"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-[-12deg]"
      >
        <g clip-path="url(#clip0_3357_822)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M282.638 153.606C282.638 191.338 252.101 221.851 214.505 221.851C176.835 221.851 146.297 191.338 146.297 153.606C146.297 115.949 176.835 85.3616 214.505 85.3616C252.101 85.3616 282.638 115.949 282.638 153.606ZM258.045 153.606C258.045 129.494 238.504 109.995 214.505 109.995C190.432 109.995 170.891 129.494 170.891 153.606C170.891 177.719 190.432 197.292 214.505 197.292C238.504 197.292 258.045 177.719 258.045 153.606Z"
            fill="#A9CCEA"
            className="translate-y-[16rem]"
          />

          {/* Computer stand */}
          <path
            d="M471.954 521.77C471.954 526.086 468.387 529.584 464.078 529.584H266.366C262.056 529.584 258.564 526.086 258.564 521.77C258.564 517.453 262.056 513.955 266.366 513.955H336.579L346.238 496.02H363.03H367.488H384.205L393.939 513.955H464.078C468.387 513.955 471.954 517.453 471.954 521.77Z"
            fill="#0F3157"
            className="translate-x-[7rem] translate-y-[-6rem] rotate-[12deg]"
          />
          {/* Computer stand */}

          <motion.path
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M484.807 152.638V170.648C484.807 174.146 481.984 176.974 478.492 176.974H470.393C468.759 184.193 465.935 190.891 462.146 196.994L467.867 202.724C470.319 205.255 470.319 209.199 467.867 211.655L455.162 224.381C452.636 226.911 448.698 226.911 446.171 224.381L440.525 218.725C434.432 222.446 427.671 225.348 420.464 226.986V235.098C420.464 238.595 417.64 241.423 414.148 241.423H396.168C392.675 241.423 389.852 238.595 389.852 235.098V226.986C382.719 225.348 375.958 222.446 369.865 218.725L364.144 224.381C361.692 226.911 357.68 226.911 355.228 224.381L342.523 211.655C340.071 209.199 340.071 205.255 342.523 202.724L348.244 196.994C344.455 190.891 341.631 184.193 339.922 176.974H331.824C328.332 176.974 325.508 174.146 325.508 170.648V152.638C325.508 149.141 328.332 146.313 331.824 146.313H339.922C341.631 139.094 344.455 132.396 348.244 126.293L342.523 120.563C340.071 118.107 340.071 114.088 342.523 111.632L355.228 98.9061C357.68 96.3757 361.692 96.3757 364.144 98.9061L369.865 104.637C375.958 100.841 382.719 98.013 389.852 96.3013V88.1894C389.852 84.6915 392.675 81.8635 396.168 81.8635H414.148C417.64 81.8635 420.464 84.6915 420.464 88.1894V96.3013C427.671 98.013 434.432 100.841 440.525 104.637L446.171 98.9061C448.698 96.3757 452.636 96.3757 455.162 98.9061L467.867 111.632C470.319 114.088 470.319 118.107 467.867 120.563L462.146 126.293C465.935 132.396 468.759 139.094 470.393 146.313H478.492C481.984 146.313 484.807 149.141 484.807 152.638ZM437.255 161.643C437.255 143.931 422.841 129.568 405.158 129.568C387.474 129.568 373.135 143.931 373.135 161.643C373.135 179.356 387.474 193.719 405.158 193.719C422.841 193.719 437.255 179.356 437.255 161.643Z"
            fill="#289DF2"
          />
          <path
            d="M139.684 462.084C130.322 462.084 122.669 454.418 122.669 445.041V177.868C122.669 168.49 130.322 160.825 139.684 160.825H584.815C594.252 160.825 601.904 168.49 601.904 177.868V445.041C601.904 454.418 594.252 462.084 584.815 462.084H139.684Z"
            fill="#0F3775"
          />

          {/* Red Bar at Top of the Screen */}
          <motion.path
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M209.972 206.743H160.562V195.878H209.972V206.743Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M269.486 206.743H220.077V195.878H269.486V206.743Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M420.315 206.743H370.831V195.878H420.315V206.743Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M571.07 206.743H521.66V195.878H571.07V206.743Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M364.59 206.743H276.173V195.878H364.59V206.743Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M514.527 206.743H426.184V195.878H514.527V206.743Z"
            fill="#FF4D6B"
          />
          {/* Red Bar at Top of the Screen */}

          <path
            d="M169.478 192.529H160.859V187.17H169.478V192.529Z"
            fill="#2889DB"
          />

          <path
            d="M251.208 221.032H160.859V215.748H251.208V221.032Z"
            fill="white"
          />

          {/* Screen to the left */}

          <path
            d="M256.483 421.598H172.747C166.506 421.598 161.379 416.538 161.379 410.286V258.392C161.379 252.14 166.506 247.08 172.747 247.08H256.483C262.725 247.08 267.851 252.14 267.851 258.392V410.286C267.851 416.538 262.725 421.598 256.483 421.598Z"
            fill="#284D89"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M210.418 278.113H174.828V272.681H210.418V278.113Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M210.418 290.244H174.828V284.811H210.418V290.244Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M210.418 302.449H174.828V297.016H210.418V302.449Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M196.598 353.205H174.828V347.772H196.598V353.205Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M196.598 365.41H174.828V359.903H196.598V365.41Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M234.045 365.41H212.275V359.903H234.045V365.41Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M188.499 339.362H174.828V333.93H188.499V339.362Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M240.732 339.362H233.451V333.93H240.732V339.362Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M230.701 339.362H193.254V333.93H230.701V339.362Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M180.029 318.822H174.828V313.389H180.029V318.822Z"
            fill="#2889DB"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M180.029 328.497H174.828V322.99H180.029V328.497Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0.4, 0.7, 1, 0.9, 1, 0.5] }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              times: [0, 0.48, 0.5, 0.52, 0.6, 0.68],
            }}
            d="M203.879 366.526H201.873L206.554 359.531H208.56L203.879 366.526Z"
            fill="white"
          />

          <motion.path
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.5,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M255.667 380.517H174.828V375.903H255.667V380.517Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 0.5,
              ease: "linear",
              repeat: Infinity,
              delay: 0.25,
            }}
            d="M255.667 391.011H174.828V386.397H255.667V391.011Z"
            fill="#FF4D6B"
          />

          {/* Screen to the left */}

          {/* Screen to the right */}

          <motion.path
            animate={{ scale: [0.95, 1, 0.95] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
            d="M644.552 319.194H422.247C416.674 319.194 412.216 314.729 412.216 309.147V248.717C412.216 243.21 416.674 238.67 422.247 238.67H644.552C650.125 238.67 654.583 243.21 654.583 248.717V309.147C654.583 314.729 650.125 319.194 644.552 319.194Z"
            fill="#FF4D6B"
          />
          <motion.path
            d="M484.287 290.691C484.287 290.691 496.546 260.475 531.765 267.769C566.908 275.062 584.815 314.729 630.063 282.281"
            stroke="white"
            strokeWidth="1.5"
            initial={{
              pathLength: 0,
              pathOffset: 1,
            }}
            animate={{
              pathLength: 1,
              pathOffset: 0,
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
          />
          <path
            d="M598.189 297.389H593.137V292.402H598.189V297.389Z"
            fill="#FF4D6B"
            stroke="white"
            stroke-width="2.3"
          />
          <path d="M490.38 266.355H554.055H490.38Z" fill="#FF4D6B" />

          <motion.path
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{
              duration: 0.5,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M490.38 266.355H554.055"
            stroke="white"
            stroke-width="1.1"
          />

          <path d="M563.863 296.272H627.538H563.863Z" fill="#FF4D6B" />

          <motion.path
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{
              duration: 0.5,
              ease: "linear",
              repeat: Infinity,
            }}
            d="M563.863 296.272H627.538"
            stroke="white"
            stroke-width="1.1"
          />

          <path
            d="M522.254 268.885H517.202V263.824H522.254V268.885Z"
            fill="#FF4D6B"
            stroke="white"
            stroke-width="2.3"
          />
          <path
            d="M454.642 339.958H406.644C402.632 339.958 399.363 336.683 399.363 332.664V260.476C399.363 256.457 402.632 253.182 406.644 253.182H454.642C458.654 253.182 461.923 256.457 461.923 260.476V332.664C461.923 336.683 458.654 339.958 454.642 339.958Z"
            fill="#284D89"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0.15,
            }}
            d="M444.759 270.448H409.095V265.536H444.759V270.448Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0.3,
            }}
            d="M444.759 281.388H409.095V276.476H444.759V281.388Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0.45,
            }}
            d="M422.544 292.402H409.095V287.491H422.544V292.402Z"
            fill="white"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0.6,
            }}
            d="M432.277 303.715H409.095V298.803H432.277V303.715Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0.75,
            }}
            d="M424.773 314.729H409.095V309.743H424.773V314.729Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: 0.9,
            }}
            d="M424.773 325.669H409.095V320.757H424.773V325.669Z"
            fill="white"
          />

          {/* Screen to the right */}

          {/* Bar Chart bottom */}

          <motion.path
            initial={{
              pathLength: 0,
              pathOffset: 1,
            }}
            animate={{
              pathLength: 1,
              pathOffset: 0,
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
            d="M559.033 369.801L550.34 376.647L537.932 378.88C537.932 378.88 526.192 378.136 525.078 378.136C523.963 378.136 516.013 371.736 516.013 371.736L501.302 366.377L491.123 370.173L479.086 367.568L460.957 366.377L443.645 373.224L429.305 375.457L416.451 379.624L402.111 380.741L386.657 368.684L372.317 366.005L357.606 374.34L345.941 378.136L332.641 377.764L315.923 387.959H305.967L289.101 393.839"
            stroke="#FF5C66"
            stroke-width="2"
          />
          <path
            d="M289.398 394.137H559.404"
            stroke="#F7F7F7"
            stroke-width="0.5"
          />
          <path
            d="M289.473 397.486H286.724V390.713H289.473V397.486Z"
            fill="#F7F7F7"
          />
          <path
            d="M560.519 397.486H557.77V390.713H560.519V397.486Z"
            fill="#F7F7F7"
          />
          <path
            d="M559.182 394.137V371.289"
            stroke="#F7F7F7"
            stroke-width="0.5"
          />
          <path
            d="M560.668 370.173C560.668 371.364 559.702 372.331 558.513 372.331C557.325 372.331 556.359 371.364 556.359 370.173C556.359 368.982 557.325 368.015 558.513 368.015C559.702 368.015 560.668 368.982 560.668 370.173Z"
            fill="#F7F7F7"
          />
          <path
            d="M519.655 406.937H351.737V403.96H519.655V406.937Z"
            fill="#28385E"
          />
          <path
            d="M454.791 406.937H351.737V403.96H454.791V406.937Z"
            fill="#FF4D6B"
          />
          <path
            d="M434.284 412.742H351.737V409.765H434.284V412.742Z"
            fill="#28385E"
          />
          <path
            d="M299.355 418.77H309.534L310.871 415.868H290.29V420.631H297.497L299.355 418.77Z"
            fill="#FF4D6B"
          />

          {/* Bar Chart bottom */}

          {/* Rows top right */}

          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
            }}
            d="M505.983 121.307V113.939H567.652V121.307H505.983Z"
            fill="#A9CCEA"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
            }}
            d="M505.983 134.405V127.112H581.992V134.405H505.983Z"
            fill="#A9CCEA"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
            }}
            d="M505.983 147.578V140.21H535.035V147.578H505.983Z"
            fill="#A9CCEA"
          />

          {/* Rows top right */}

          {/* Rows top left */}

          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M77.0488 196.547V189.254H117.914V196.547H77.0488Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.25 }}
            d="M77.0488 209.72V202.352H138.644V209.72H77.0488Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
            d="M77.0488 222.818V215.525H153.058V222.818H77.0488Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.75 }}
            d="M77.0488 235.916V228.623H106.1V235.916H77.0488Z"
            fill="#FF4D6B"
          />

          {/* Rows top left */}

          {/* Blue frames and red button */}

          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M353.297 469.451H178.989V446.753H353.297V469.451Z"
            stroke="#289DF2"
            stroke-width="2.3"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M271.417 319.79H263.096V268.29H271.417V319.79Z"
            stroke="#289DF2"
            stroke-width="2.3"
          />

          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M632.293 384.536C632.293 400.537 619.365 413.486 603.39 413.486C587.416 413.486 574.488 400.537 574.488 384.536C574.488 368.61 587.416 355.661 603.39 355.661C619.365 355.661 632.293 368.61 632.293 384.536Z"
            fill="#FF4D6B"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1], x: ["0rem", "-0.2rem", "0rem"] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M601.309 381.857L589.793 386.025L601.309 390.192V394.509L584.889 388.257V383.792L601.309 377.541V381.857Z"
            fill="#F9FBFC"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1], x: ["0rem", "0.2rem", "0rem"] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M605.024 377.541L621.445 383.792V388.257L605.024 394.509V390.192L616.541 386.025L605.024 381.857V377.541Z"
            fill="#F9FBFC"
          />

          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M306.339 148.843H169.776V134.629H306.339V148.843Z"
            stroke="#289DF2"
            stroke-width="2.3"
          />

          {/* Blue frames and red button */}

          {/* Sliders */}

          <path
            d="M385.914 250.95H285.981V245.963H385.914V250.95Z"
            fill="#284D89"
          />
          <motion.path
            animate={{ x: ["0rem", "3.5rem", "0rem"] }}
            transition={{ duration: 3, repeat: Infinity }}
            d="M331.304 250.95H285.981V245.963H331.304V250.95Z"
            fill="#2889DB"
          />
          <path
            d="M385.914 263.973H285.981V258.913H385.914V263.973Z"
            fill="#284D89"
          />
          <motion.path
            animate={{ x: ["0rem", "2rem", "0rem"] }}
            transition={{ duration: 5, repeat: Infinity }}
            d="M355.6 263.973H285.981V258.913H355.6V263.973Z"
            fill="#FF4D6B"
          />
          <path
            d="M385.914 276.997H285.981V271.936H385.914V276.997Z"
            fill="#284D89"
          />
          <motion.path
            animate={{ x: ["0rem", "5rem", "0rem"] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M306.339 276.997H285.981V271.936H306.339V276.997Z"
            fill="#1AE5FF"
          />

          {/* Sliders */}

          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M475.669 308.998H472.399V305.724H475.669V308.998Z"
            fill="FF4D6B"
          />
          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M486.887 308.998H483.618V305.724H486.887V308.998Z"
            fill="white"
          />
          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M498.032 308.998H494.763V305.724H498.032V308.998Z"
            fill="white"
          />

          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M525.598 182.11H519.431V176.007H525.598V182.11Z"
            fill="white"
          />
          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M546.477 182.11H540.385V176.007H546.477V182.11Z"
            fill="white"
          />
          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M567.429 182.11H561.337V176.007H567.429V182.11Z"
            fill="white"
          />

          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M438.964 434.994H432.872V428.891H438.964V434.994Z"
            fill="white"
          />
          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M459.917 434.994H453.825V428.891H459.917V434.994Z"
            fill="white"
          />
          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M480.869 434.994H474.777V428.891H480.869V434.994Z"
            fill="white"
          />

          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M179.88 262.708H176.611V259.434H179.88V262.708Z"
            fill="white"
          />
          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M191.025 262.708H187.756V259.434H191.025V262.708Z"
            fill="white"
          />
          <motion.path
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M202.17 262.708H198.901V259.434H202.17V262.708Z"
            fill="white"
          />

          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M254.106 319.194H220.597V238.67H254.106V319.194Z"
            stroke="#289DF2"
            stroke-width="2.3"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            d="M142.953 381.857H100.528V339.362H142.953V381.857Z"
            fill="#289DF2"
          />
          <path
            d="M390.967 434.176H406.05L414.446 442.585H501.6L514.974 429.189H561.857"
            stroke="white"
            stroke-width="2.3"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M390.967 434.399C390.967 436.855 389.035 438.79 386.583 438.79C384.131 438.79 382.199 436.855 382.199 434.399C382.199 431.943 384.131 430.008 386.583 430.008C389.035 430.008 390.967 431.943 390.967 434.399Z"
            stroke="white"
            stroke-width="2.3"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M570.847 428.966C570.847 431.422 568.841 433.357 566.463 433.357C564.011 433.357 562.005 431.422 562.005 428.966C562.005 426.51 564.011 424.575 566.463 424.575C568.841 424.575 570.847 426.51 570.847 428.966Z"
            stroke="white"
            stroke-width="2.3"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1], x: [0, -4, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M468.09 478.084H428.934V469.154H468.09V478.084Z"
            stroke="#289DF2"
            stroke-width="2.3"
          />
          <motion.path
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            d="M514.676 494.904H428.934V485.973H514.676V494.904Z"
            stroke="#289DF2"
            stroke-width="2.3"
          />
        </g>
        <defs>
          <clipPath id="clip0_3357_822">
            <rect width="743" height="579" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ErrorGraphic;
