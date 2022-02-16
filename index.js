(function(window, _) {
    window.myLibraryName = window.myLibraryName || {
      numz: {},
      phyz: {makeBody: function(type, {
        velocityX = 0,
        velocityY = 0,
        rotationalVelocity = 0,
        integrity = 1,
        density = 1,
        volatility = 0
      } = {}) {
        if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
        return {
          type: type,
          velocityX: velocityX,
          velocityY: velocityY,
          rotationalVelocity: rotationalVelocity,
          integrity: integrity,
          density: density,
          volatility: volatility,

          handleCollision(impact, body) {
          },
          update(event) {
          }
        };
      },
    },
    };
  }(window, window._));