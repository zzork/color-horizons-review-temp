import { useRef, useEffect } from "react";
import { oscilloscopeAnalyser } from "../services/notePlayerService";

const Oscilloscope = ({}) => {
  let width = window.innerWidth * 0.5 * 0.796;
  if (window.innerWidth < 975) {
    width = window.innerWidth * 0.9 * 0.99;
  }

  // fixes glitch where the oscilloscope renders too big on chrome when turned
  // null will be first render
  // needs to fit in the main div, the window was rendering based on the size of this existing element
  if (document.getElementById("mainDiv") !== null) {
    const mainDivSize = document.getElementById("mainDiv").offsetWidth;
    width = mainDivSize * 0.5;
    if (mainDivSize < 975) {
      width = mainDivSize * 0.9;
    }
  }

  const height = 175;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const canvasCtx = canvas.getContext("2d");

    oscilloscopeAnalyser.fftSize = 8192;
    const bufferLength = oscilloscopeAnalyser.frequencyBinCount;

    // const dataArray = new Uint8Array(bufferLength);
    const dataArray = new Uint8Array(bufferLength * 2); // making this * 2 doubles the length

    oscilloscopeAnalyser.getByteTimeDomainData(dataArray);
    canvasCtx.clearRect(0, 0, width, height);
    function draw() {
      // let drawVisual = requestAnimationFrame(draw);
      requestAnimationFrame(draw);
      oscilloscopeAnalyser.getByteTimeDomainData(dataArray);
      canvasCtx.clearRect(0, 0, width, height);
      canvasCtx.fillStyle = "transparent";
      canvasCtx.fillRect(0, 0, width, height);
      // canvasCtx.width = 200;
      canvasCtx.strokeStyle = "rgb(0, 0, 0)";
      canvasCtx.beginPath();
      let sliceWidth = (width * 1.0) / (bufferLength * 2); // modified from bufferlength to bufferlength * 2
      let x = 0;
      for (let i = 0; i < bufferLength * 2; i++) {
        // modified from bufferlength to bufferlength * 2
        let v = dataArray[i] / 128.0;
        let y = (v * height) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }
      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();
    }
    draw();
  }, [width]);

  return <canvas height={height} width={width} ref={canvasRef} />;
};

export default Oscilloscope;
