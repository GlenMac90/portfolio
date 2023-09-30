import { motion } from "framer-motion";

const MainGraphicImages = () => {
  return (
    <>
      <motion.path
        initial={{ scale: 1, x: "10rem", opacity: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          x: 0,
          opacity: 1,
        }}
        transition={{
          scale: {
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          },
          x: {
            duration: 1,
            ease: "easeInOut",
          },
          opacity: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        d="M671.597 170.5C671.597 241.051 614.46 298.282 544.024 298.282C473.588 298.282 416.525 241.051 416.525 170.5C416.525 99.9481 473.588 42.7924 544.024 42.7924C614.46 42.7924 671.597 99.9481 671.597 170.5Z"
        className="fill-graphicOffWhite2"
      />
      <motion.path
        initial={{ scale: 1, x: "-10rem", opacity: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          x: 0,
          opacity: 1,
        }}
        transition={{
          scale: {
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          },
          x: {
            duration: 1,
            ease: "easeInOut",
          },
          opacity: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        d="M289.993 439.832C289.993 481.061 256.632 514.476 215.47 514.476C174.308 514.476 140.947 481.061 140.947 439.832C140.947 398.602 174.308 365.187 215.47 365.187C256.632 365.187 289.993 398.602 289.993 439.832Z"
        className="fill-graphicOffWhite2"
      />

      <motion.path
        initial={{ scale: 1, y: "10rem", opacity: 0 }}
        animate={{
          y: 0,
          scale: [1, 0.8, 1],
          opacity: 1,
        }}
        transition={{
          scale: {
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0.5,
          },
          y: {
            duration: 1,
            ease: "easeInOut",
          },
          opacity: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M282.638 153.606C282.638 191.338 252.101 221.851 214.505 221.851C176.835 221.851 146.297 191.338 146.297 153.606C146.297 115.949 176.835 85.3616 214.505 85.3616C252.101 85.3616 282.638 115.949 282.638 153.606ZM258.045 153.606C258.045 129.494 238.504 109.995 214.505 109.995C190.432 109.995 170.891 129.494 170.891 153.606C170.891 177.719 190.432 197.292 214.505 197.292C238.504 197.292 258.045 177.719 258.045 153.606Z"
        className="fill-graphicLighterBlue"
      />
      <path
        d="M471.954 521.77C471.954 526.086 468.387 529.584 464.078 529.584H266.366C262.056 529.584 258.564 526.086 258.564 521.77C258.564 517.453 262.056 513.955 266.366 513.955H336.579L346.238 496.02H363.03H367.488H384.205L393.939 513.955H464.078C468.387 513.955 471.954 517.453 471.954 521.77Z"
        className="fill-graphicDarkGrey"
      />
      <path
        d="M379.821 489.322H347.426V479.796H379.821V489.322Z"
        className="fill-graphicLightRed"
      />
      <path
        d="M379.821 473.619H347.426V464.168H379.821V473.619Z"
        className="fill-graphicLightRed"
      />
      <motion.path
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{
          duration: 2,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        d="M621.52 431.943C615.873 434.101 609.78 435.292 603.39 435.292C575.379 435.292 552.718 412.593 552.718 384.536C552.718 356.554 575.379 333.781 603.39 333.781C631.401 333.781 654.063 356.554 654.063 384.536C654.063 392.053 652.428 399.197 649.531 405.597"
        className="stroke-graphicLightRed"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        initial={{ y: "-15rem" }}
        animate={{ rotate: 360, y: 0 }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
          y: {
            duration: 2,
          },
        }}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M484.807 152.638V170.648C484.807 174.146 481.984 176.974 478.492 176.974H470.393C468.759 184.193 465.935 190.891 462.146 196.994L467.867 202.724C470.319 205.255 470.319 209.199 467.867 211.655L455.162 224.381C452.636 226.911 448.698 226.911 446.171 224.381L440.525 218.725C434.432 222.446 427.671 225.348 420.464 226.986V235.098C420.464 238.595 417.64 241.423 414.148 241.423H396.168C392.675 241.423 389.852 238.595 389.852 235.098V226.986C382.719 225.348 375.958 222.446 369.865 218.725L364.144 224.381C361.692 226.911 357.68 226.911 355.228 224.381L342.523 211.655C340.071 209.199 340.071 205.255 342.523 202.724L348.244 196.994C344.455 190.891 341.631 184.193 339.922 176.974H331.824C328.332 176.974 325.508 174.146 325.508 170.648V152.638C325.508 149.141 328.332 146.313 331.824 146.313H339.922C341.631 139.094 344.455 132.396 348.244 126.293L342.523 120.563C340.071 118.107 340.071 114.088 342.523 111.632L355.228 98.9061C357.68 96.3757 361.692 96.3757 364.144 98.9061L369.865 104.637C375.958 100.841 382.719 98.013 389.852 96.3013V88.1894C389.852 84.6915 392.675 81.8635 396.168 81.8635H414.148C417.64 81.8635 420.464 84.6915 420.464 88.1894V96.3013C427.671 98.013 434.432 100.841 440.525 104.637L446.171 98.9061C448.698 96.3757 452.636 96.3757 455.162 98.9061L467.867 111.632C470.319 114.088 470.319 118.107 467.867 120.563L462.146 126.293C465.935 132.396 468.759 139.094 470.393 146.313H478.492C481.984 146.313 484.807 149.141 484.807 152.638ZM437.255 161.643C437.255 143.931 422.841 129.568 405.158 129.568C387.474 129.568 373.135 143.931 373.135 161.643C373.135 179.356 387.474 193.719 405.158 193.719C422.841 193.719 437.255 179.356 437.255 161.643Z"
        className="fill-graphicPaleBlue"
      />
      <path
        d="M139.684 462.084C130.322 462.084 122.669 454.418 122.669 445.041V177.868C122.669 168.49 130.322 160.825 139.684 160.825H584.815C594.252 160.825 601.904 168.49 601.904 177.868V445.041C601.904 454.418 594.252 462.084 584.815 462.084H139.684Z"
        className="fill-graphicGrey"
      />
    </>
  );
};

export default MainGraphicImages;
