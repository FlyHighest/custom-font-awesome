/*!
 * Font Awesome Free 5.0.10 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
(function () {
'use strict';

var _WINDOW = {};
try {
  if (typeof window !== 'undefined') _WINDOW = window;
  
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;

var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';



var PRODUCTION = function () {
  try {
    return undefined === 'production';
  } catch (e) {
    return false;
  }
}();

var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);



var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (!PRODUCTION) {
      throw e;
    }
  }
}

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function define(prefix, icons) {
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }
    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _extends({}, namespace.styles[prefix] || {}, normalized);
  }

  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */
  if (prefix === 'fas') {
    define('fa', icons);
  }
}

var icons = {
  "baidu": [1024, 1024, [], "f502",  "M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z"],
   "zhihu": [1024, 1024, [], "f502", "M612.132558 691.480744 662.888546 656.141888 703.577247 656.141888 703.577247 375.380436 587.504648 375.380436 587.504648 656.141888 600.147596 656.141888 612.132558 691.480744ZM512 75.213006c-228.671073 0-414.016385 195.538465-414.016385 436.786994 0 241.247506 185.346335 436.785971 414.016385 436.785971s414.016385-195.539488 414.016385-436.785971C926.016385 270.751471 740.67005 75.213006 512 75.213006L512 75.213006zM430.8027 539.753087c0 0.443092-0.059352 0.948605-0.12075 1.391696-1.318018 18.965957-5.632277 40.776705-11.564383 62.841234l0-0.064468 21.452591-16.753569 63.399959 74.915223c8.270361 30.661324-2.996241 58.542324-2.996241 58.542324l-85.452207-103.934141 0-0.12689c-8.449439 28.448936-19.296485 56.455803-29.783327 78.582753-20.134573 42.48358-49.197492 50.892087-79.93761 53.674457-30.741142 2.78237-20.794605-4.868891-20.794605-4.868891 60.762899-51.586912 69.692269-81.553411 86.530772-114.301256 10.606569-20.673855 18.216897-59.616796 22.531156-89.899496L290.339598 539.752064c0 0 4.314259-28.891004 17.197684-38.690184l90.846054 0c0.538259-14.224979-1.198292-95.462189-1.797949-121.951493l-44.10552 0c-8.269337 41.787732-36.673248 52.599985-42.905182 55.760978-6.29231 3.160993-21.152762 6.638187-18.816554 0 2.337231-6.638187 24.090675-42.863227 38.651298-102.796224 14.561647-59.931974 57.108672-57.530274 57.108672-57.530274-11.44568 20.926612-20.014846 68.278059-20.014846 68.278059l142.679583 0c9.049097 0 9.468652 36.225039 9.468652 36.225039l-81.256652 0c-0.659009 21.052478-2.456958 77.761038-4.494361 121.951493l85.332481 0c0 0 10.905374 14.287401 10.905374 38.690184l-98.335632 0L430.8027 539.753087 430.8027 539.753087zM740.430596 694.832072l-78.260411 0-62.080917 43.305295-14.681374-43.305295-35.83516 0L549.572734 335.236134l190.858886 0L740.431619 694.832072 740.430596 694.832072z"],
   "xiaomi":[1024,1024, [], "f600",  "M716.8 805.823147 716.8 384.709973c0-95.68256-77.544107-173.2608-173.216427-173.2608L56.664747 211.449173c-3.754667 0-6.795947 3.024213-6.795947 6.741333L49.8688 805.819733c0 3.71712 3.04128 6.72768 6.795947 6.72768l130.061653 0c3.754667 0 6.792533-3.027627 6.792533-6.765227L193.518933 344.562347c0-3.744427 3.04128-6.782293 6.795947-6.782293l279.68512 0c52.52096 0 95.112533 42.571093 95.112533 95.09888l0 372.8896c0 3.741013 3.037867 6.761813 6.772053 6.761813l128.146773 0c3.72736 0 6.772053-3.017387 6.772053-6.72768M454.15424 805.778773c0 3.744427-3.01056 6.76864-6.76864 6.76864L317.354667 812.547413c-3.754667 0-6.795947-3.027627-6.795947-6.76864L310.55872 452.348587c0-3.741013 3.04128-6.77888 6.795947-6.77888l130.030933 0c3.75808 0 6.76864 3.037867 6.76864 6.77888l0 353.447253L454.15424 805.778773zM974.134613 805.778773c0 3.744427-3.044693 6.76864-6.79936 6.76864l-130.000213 0c-3.764907 0-6.826667-3.027627-6.826667-6.76864L830.508373 218.251947c0-3.75808 3.06176-6.792533 6.826667-6.792533l130.000213 0c3.75808 0 6.79936 3.034453 6.79936 6.792533L974.134613 805.778773z"]

};

bunker(function () {
  define('fac', icons);
});

}());
