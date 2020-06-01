registerPaint(
  "circle",
  class {
    static get inputProperties() {
      return ["--circle-color"];
    }
    paint(ctx, _, properties) {
      // canvas ctx
      const color = properties.get("--circle-color");
      // ctx.fillStyle = "red";
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(100, 100, 20, 0, 2 * Math.PI, false);
      ctx.fill();
    }
  }
);
