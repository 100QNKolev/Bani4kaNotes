# Bani4kaNotes
import Background from "./img/Video.mp4"


<video
    autoPlay
    loop
    muted
    style={{
      position: "fixed",
      width: "100%",
      left: "50%",
      top: "50%",
      height: "100%",
      objectFit: "cover",
      transform: "translate(-50%, -50%)",
      zIndex: "-1",
    }}
  >
    <source src={Background} type="video/mp4" />
  </video>
