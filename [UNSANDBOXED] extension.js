// Name: Better Operations
// ID: monobetterops
// Description: Better Operations tab, mainly for use instead of the normal Operations tab. It includes all blocks in the standard Operations tab. (Made using the TW/PM Extension Template by Monochromasity on GitHub.)
// By: You :)

(function (Scratch) {
  "use strict";

  class monobetterops {
    getInfo() {
      return {
        id: 'monobetterops',
        name: 'Better Operations',
        blocks: [
          {
            opcode: 'plus',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] + [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: ''
              }
            }
          }
        ]
      };
    }

    plus(args) {
      return args.ONE + args.TWO;
    }
  }
  Scratch.extensions.register(new monobetterops());
})(Scratch);
