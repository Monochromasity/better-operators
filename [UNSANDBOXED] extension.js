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
          },
          {
            opcode: 'randchar',
            blockType: Scratch.BlockType.REPORTER,
            text: 'pick random character from string [ONE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              }
            }
          },
          {
            opcode: 'constrain',
            blockType: Scratch.BlockType.REPORTER,
            text: 'constrain [ONE] min [TWO] max [THREE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '50'
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              THREE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '100'
              }
            }
          },
          {
            opcode: 'interpolate',
            blockType: Scratch.BlockType.REPORTER,
            text: 'interpolate [ONE] to [TWO] by [THREE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '1'
              },
              TWO: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '3'
              },
              THREE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0.5'
              }
            }
          },
          '---',
          {
            opcode: 'morethan',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] > [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },
          {
            opcode: 'moreequal',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] ≥ [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },
          {
            opcode: 'lessthan',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] < [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },
          {
            opcode: 'lessequal',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] ≤ [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },
          {
            opcode: 'equal',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] = [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },
          {
            opcode: 'inequal',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] ≠ [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING
              },
              TWO: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '50'
              }
            }
          },
          '---',
          {
            opcode: 'true',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true'
          },
          {
            opcode: 'false',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false'
          },
          '---',
          {
            opcode: 'and',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] and [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              TWO: {
                type: Scratch.ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'or',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] or [TWO]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.BOOLEAN
              },
              TWO: {
                type: Scratch.ArgumentType.BOOLEAN
              }
            }
          },
          {
            opcode: 'not',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'not [ONE]',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.BOOLEAN
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
      return Math.floor(Math.random() * (args.TWO - (args.ONE - 1)) + args.ONE);
    }
    randchar(args) {
      return args.ONE.charAt(Math.floor(Math.random() * args.ONE.length));
    }
    constrain(args) {
      if (args.ONE < args.TWO) {
        return args.TWO;
      } else if (args.ONE > args.THREE) {
        return args.THREE;
      } else {
        return args.ONE;
      }
    }
    interpolate(args) {
      return Math.abs(args.ONE - args.TWO) * args.THREE + args.ONE;
    }
    morethan(args) {
      return args.ONE > args.TWO;
    }
    moreequal(args) {
      return args.ONE >= args.TWO;
    }
    lessthan(args) {
      return args.ONE < args.TWO;
    }
    lessequal(args) {
      return args.ONE <= args.TWO;
    }
    equal(args) {
      return args.ONE == args.TWO;
    }
    inequal(args) {
      return args.ONE != args.TWO;
    }
    true(args) {
      return true;
    }
    false(args) {
      return false;
    }
    and(args) {
      return args.ONE && args.TWO;
    }
    or(args) {
      return args.ONE || args.TWO;
    }
    not(args) {
      return !(args.ONE);
    }
  }
  Scratch.extensions.register(new monobetterops());
})(Scratch);
