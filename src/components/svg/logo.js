import React from "react";
import { motion } from "framer-motion";
const Logo = ({ width, height }) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(187, 134, 252, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(187, 134, 252, 1)",
    },
  };
  const configSvg = {
    width,
    height,
  };

  return (
    <svg
      {...configSvg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 86.285 86.285"
      className="item"
    >
      <motion.path
        d="M9.83,40.531c0-10.4,4.728-20.016,12.969-26.381c1.577-1.218,1.868-3.484,0.65-5.062c-1.219-1.577-3.484-1.87-5.063-0.65
		C8.362,16.181,2.613,27.878,2.613,40.531c0,4.96,0.885,9.803,2.631,14.396c0.548,1.441,1.919,2.327,3.374,2.327
		c0.426,0,0.859-0.076,1.281-0.236c1.863-0.708,2.799-2.792,2.091-4.655C10.557,48.592,9.83,44.611,9.83,40.531z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M43.143,0c-4.357,0-8.644,0.689-12.743,2.046c-1.893,0.626-2.918,2.668-2.292,4.56c0.626,1.892,2.668,2.916,4.56,2.292
		c3.367-1.115,6.892-1.68,10.476-1.68c18.368,0,33.312,14.944,33.312,33.313c0,18.37-14.944,33.316-33.312,33.316
		c-4.274,0-8.415-0.816-12.288-2.357l4.341-0.578c1.976-0.264,3.364-2.078,3.101-4.054c-0.264-1.977-2.091-3.36-4.054-3.101
		l-13.864,1.848c-1.976,0.264-3.364,2.078-3.101,4.054c0.024,0.179,0.07,0.348,0.118,0.517c0.015,0.537,0.139,1.077,0.402,1.578
		l6.624,12.601c0.646,1.229,1.899,1.931,3.197,1.931c0.566,0,1.141-0.134,1.676-0.415c1.765-0.928,2.443-3.109,1.516-4.873
		L29.64,78.77c4.29,1.516,8.836,2.295,13.503,2.295c22.348,0,40.529-18.183,40.529-40.533C83.672,18.182,65.49,0,43.143,0z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M41.477,36.553c0-3.083-2.577-5.129-5.811-5.129c-2.325,0-4.195,0.581-5.61,1.288c-0.379,0.202-0.556,0.506-0.556,0.936
		c0,0.556,0.404,0.984,0.96,0.984c0.202,0,0.43-0.101,0.48-0.126c1.137-0.505,2.603-0.909,4.321-0.909
		c2.931,0,3.992,1.339,3.992,3.133c0,4.119-10.107,5.938-10.107,11.27c0,0.784,0.556,1.314,1.339,1.314h9.754
		c0.606,0,1.087-0.455,1.087-1.062c0-0.606-0.48-1.086-1.087-1.086h-8.794C32.81,44.209,41.477,41.758,41.477,36.553z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M54.31,49.439c0.632,0,1.162-0.505,1.162-1.137v-3.437h1.921c0.581,0,1.035-0.43,1.035-1.011
		c0-0.581-0.454-1.036-1.035-1.036h-1.921v-9.805c0-0.809-0.581-1.465-1.466-1.465h-0.505c-0.506,0-0.985,0.252-1.264,0.607
		l-7.935,10.133C44.126,42.517,44,42.87,44,43.198v0.228c0,0.809,0.657,1.44,1.466,1.44h7.706v3.437
		C53.172,48.935,53.678,49.439,54.31,49.439z M46.451,42.819l6.721-8.667v8.667H46.451z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
      <motion.path
        d="M28.158,24.259c3.995-3.487,9.119-5.407,14.429-5.407c12.105,0,21.953,9.85,21.953,21.956c0,0.996,0.809,1.805,1.805,1.805
		c0.996,0,1.805-0.809,1.805-1.805c0-14.096-11.468-25.564-25.563-25.564c-6.183,0-12.149,2.236-16.802,6.297
		c-0.751,0.655-0.828,1.795-0.173,2.546C26.268,24.836,27.408,24.914,28.158,24.259z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] },
        }}
      />
    </svg>
  );
};

export default Logo;