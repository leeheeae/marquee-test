import Marquee from "react-fast-marquee";

function Block({ children }) {
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        marginRight: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "400px",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          margin: "auto",
        }}
      >
        <Marquee pauseOnHover direction="left">
          <Block>1</Block>
          <Block>2</Block>
          <Block>3</Block>
          <Block>4</Block>
        </Marquee>

        <Marquee pauseOnHover direction="right">
          <Block>5</Block>
          <Block>6</Block>
          <Block>7</Block>
          <Block>8</Block>
        </Marquee>
      </div>
    </div>
  );
}

export default App;
