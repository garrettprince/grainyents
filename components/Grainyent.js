import * as d3 from "d3";
import React from "react";

function Grainyent() {
  let n = 6; // number of points
  let f = 0.1; // level of randomness

  // D3 Helpers
  const mapX = d3.scaleLinear().domain([-0.5, 0.5]).range([100, 400]);

  const mapY = d3.scaleLinear().domain([-0.5, 0.5]).range([100, 400]);

  // container
  const svg = d3.select("#svg").attr("width", 300).attr("height", 800);
  // .style('position', fixed)

  const path = d3
    .line()
    .x((d) => mapX(d.x))
    .y((d) => mapY(d.y))
    .curve(d3.curveBasisClosed);
  // smoothes path

  const thePath = svg.append("path");

  const defs = svg.append("defs");

  let gradient = defs
    .append("linearGradient")
    .attr("id", "svgGradient")
    .attr("x1", "0%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "100%");

  let gradientStop1 = gradient
    .append("stop")
    .attr("class", "start")
    .attr("offset", "0%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 1);

  // let gradientStop2 = gradient.append('stop')
  //     .attr('class', 'middle')
  //     .attr('offset', '50%')
  //     .attr('stop-color', 'blue')
  //     .attr('stop-opacity', 1);

  let gradientStop3 = gradient
    .append("stop")
    .attr("class", "end")
    .attr("offset", "100%")
    .attr("stop-color", "white")
    .attr("stop-opacity", 1);

  // Draw function
  const draw = () => {
    // randomizing the randomizer
    f = Math.floor(Math.random() * 2) + 1;

    // this is the core part, we create a dataset of points
    const data = d3.range(n).map((d, i) => {
      const w = (Math.PI * 2) / n;
      const a = w * i;
      const x = Math.cos(a) + (Math.random() * f - f / 2);
      const y = Math.sin(a) + (Math.random() * f - f / 2);
      return { x, y };
    });

    const gradientUrl = "url(#svgGradient)";

    // update the path1
    thePath.transition().attr("d", path(data)).style("fill", gradientUrl);

    // Randomized items for gradient variability
    const randPercent1 = Math.floor(Math.random() * 100) + "%";
    const randPercent2 = Math.floor(Math.random() * 100) + "%";
    const randPercent3 = Math.floor(Math.random() * 100) + "%";
    const randPercent4 = Math.floor(Math.random() * 100) + "%";

    const randDegree = Math.floor(Math.random() * 360);
    const complimentaryDegree1 = randDegree - 30;
    // const complimentaryDegree2 = complimentaryDegree1 - 30

    const randOpacity = Math.random();

    const hue1 = "hsla(" + randDegree + ", 100%, 50%, 1)";
    const hue2 = "hsla(" + complimentaryDegree1 + ", 100%, 50%, 1)";
    // const hue3 = 'hsla(' + complimentaryDegree2 + ', 100%, 50%, 1)'

    // path.style()

    // edited with different formatting to prevent duplication

    gradient
      .attr("x1", String(randPercent1))
      .attr("x2", String(randPercent2))
      .attr("y1", String(randPercent3))
      .attr("y2", String(randPercent4));

    gradientStop1
      .transition()
      .duration(200)
      .attr("class", "start")
      .attr("offset", "0%")
      .attr("stop-color", String(hue1))
      .attr("stop-opacity", 1);

    // No 3rd stop until I figure out filters
    // gradientStop2.attr('class', 'middle')
    // .attr('offset', '50%')
    // .attr('stop-color', String(hue2))
    // .attr('stop-opacity', 1);

    gradientStop3
      .transition()
      .duration(200)
      .attr("class", "end")
      .attr("offset", "100%")
      .attr("stop-color", String(hue2))
      .attr("stop-opacity", 1);
  };

  d3.select("#draw").on("click", draw);

  return (
    <div>
      <p>Test</p>
      <main>
        <button id="draw" onClick={draw}>
          Draw
        </button>
        <button id="download">Download SVG</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 500 500"
          id="svg"
          filter="url(#blur)"
        >
          {/* <filter id="blur">
                    <feGaussianBlur stdDeviation="5"/>
                    <feTurbulence
                      type='fractalNoise'
                      baseFrequency='3.73'
                      numOctaves='4'
                      stitchTiles='stitch'/>
                </filter> */}

          <rect id="testRect" filter="url(#blur)" />
        </svg>
      </main>
    </div>
  );
}

export default Grainyent;
