import { motion } from "framer-motion";

const paths = [
  {
    path: "M235.16 257.052H225.352V254.224H235.16V257.052Z",
    colour: "fill-graphicTurquoise",
  },
  {
    path: "M235.16 263.527H225.352V260.624H235.16V263.527Z",
    colour: "fill-graphicTurquoise",
  },
  {
    path: "M235.16 270.001H225.352V267.099H235.16V270.001Z",
    colour: "fill-graphicTurquoise",
  },
  {
    path: "M239.618 279.453H225.352V276.551H239.618V279.453Z",
    colour: "fill-graphicTurquoise",
  },
  {
    path: "M239.618 285.928H225.352V283.025H239.618V285.928Z",
    colour: "fill-white",
  },
  {
    path: "M239.618 292.402H225.352V289.5H239.618V292.402Z",
    colour: "fill-white",
  },
  {
    path: "M235.16 303.566H225.352V300.663H235.16V303.566Z",
    colour: "fill-graphicTurquoise",
  },
];

const GraphicCascadingRowsRight = () => {
  return (
    <>
      {paths.map((path, index) => (
        <motion.path
          key={path.path}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            delay: (index + 1) * 0.3,
          }}
          d={path.path}
          className={path.colour}
        />
      ))}
    </>
  );
};

export default GraphicCascadingRowsRight;
