import { useSpring, animated } from "@react-spring/web";

export default function Box() {
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return <animated.div style={style}>Hello</animated.div>;
}
