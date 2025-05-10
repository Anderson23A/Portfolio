export default function VideoComp() {
  return (
    <video width={"100%"} height={"100%"} autoPlay muted loop controls>
      <source src={"/Portfolio/videos/faleconosco.mp4"} type="video/mp4" />
    </video>
  );
}
