phina.namespace(function() {

  phina.define("phigl.ImageUtil", {

    init: function() {},

    _static: {

      resizePowOf2: function(image, fitH, fitV) {
        if (typeof(image) == "string") {
          image = phina.asset.AssetManager.get("image", image);
        }

        if (Math.sqrt(image.width) % 1 == 0 && Math.sqrt(image.height) % 1 == 0) {
          return image;
        }

        var width = Math.pow(2, Math.ceil(Math.log2(image.width)));
        var height = Math.pow(2, Math.ceil(Math.log2(image.height)));

        var canvas = phina.graphics.Canvas().setSize(width, height);

        var dw = fitH ? width : image.width;
        var dh = fitV ? height : image.height;

        canvas.context.drawImage(image.domElement,
          0, 0, image.width, image.height,
          0, 0, dw, dh
        );

        return canvas;
      },

    },

  });
});