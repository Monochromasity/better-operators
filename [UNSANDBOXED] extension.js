// Name: Better Operators
// ID: monobetterops
// Description: Better Operators tab, mainly for use instead of the normal Operators tab. It includes all blocks in the standard Operators tab. (Made using the TW/PM Extension Template by Monochromasity on GitHub.)
// By: Monochromasity

(function (Scratch) {
  "use strict";

  class monobetterops {
    getInfo() {
      return {
        id: 'monobetterops',
        name: 'Better Operators',
        color1: '#59c059',
        blocks: [
          {
            opcode: 'plus',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] + [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'betterplus',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] + [TWO] + [THREE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              },
              THREE: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'minus',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] - [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'betterminus',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] - [TWO] - [THREE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              },
              THREE: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'times',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] * [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'bettertimes',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] * [TWO] * [THREE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              },
              THREE: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'divide',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] / [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'betterdivide',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] / [TWO] / [THREE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              },
              THREE: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'exponent',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] ^ [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          {
            opcode: 'tetrate',
            blockType: Scratch.BlockType.REPORTER,
            text: '[ONE] tetrated by [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER
              }
            }
          },
          '---',
          {
            opcode: 'rand',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pick random [ONE] to [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              }
            }
          }
        ]
      };
    }

    plus(args) {
      return args.ONE + args.TWO;
    }
    betterplus(args) {
      return args.ONE + args.TWO + args.THREE;
    }
    minus(args) {
      return args.ONE - args.TWO;
    }
    betterminus(args) {
      return args.ONE - args.TWO - args.THREE;
    }
    times(args) {
      return args.ONE * args.TWO;
    }
    bettertimes(args) {
      return args.ONE * args.TWO * args.THREE;
    }
    divide(args) {
      return args.ONE / args.TWO;
    }
    betterdivide(args) {
      return args.ONE / args.TWO / args.THREE;
    }
    exponent(args) {
      return args.ONE ** args.TWO;
    }
    tetrate(args) {
      let one = args.ONE;
      let result = one;
      for (let i = 1; i < args.TWO; i++) {
        result = result ** one;
      }
      return result;
    }
    rand(args) {
      return Math.floor(Math.random() * (args.TWO - (args.ONE + 1)) + args.ONE);
    }
  }
  Scratch.extensions.register(new monobetterops());
})(Scratch);
