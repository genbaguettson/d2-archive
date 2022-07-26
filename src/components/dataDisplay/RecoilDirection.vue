<template>
  <svg height="12" viewBox="0 0 2 1">
    <circle r="1" cx="1" cy="1" fill="#333" />
    {value >= 95 ? (
      <line
        :x1='`${1 - x}`'
        :y1='`${1 + y}`'
        :x2='`${1 + x}`'
        :y2='`${1 - y}`'
        stroke="white"
        stroke-width="0.1"
      />
    ) : (
      <path
        :d='`M1,1 L${1 + xSpreadMore},${1 - ySpreadMore} A1,1 0 0,${direction < 0 ? 1 : 0} ${
          1 + xSpreadLess
        },${1 - ySpreadLess} Z`'
        fill="#FFF"
      />
    )}
  </svg>
</template>

<script>
// Thank you DIM for making this component. I don't understand it, but I love you
// -> Use app.destinyitemmanager.com <-

/**
 * A value from 100 to -100 where positive is right and negative is left and zero is straight up
 * See https://imgur.com/LKwWUNV
 */
function recoilDirection(value) {
  return Math.sin((value + 5) * (Math.PI / 10)) * (100 - value);
}

/**
 * A value from 0 to 100 describing how straight up and down the recoil is, for sorting
 */
export function recoilValue(value) {
  const deviation = Math.abs(recoilDirection(value));
  return 100 - deviation + value / 100000;
}

// Bias the direction towards the center - at 1.0 this would mean recoil would swing ±90°
const verticalScale = 0.8;
// The maximum angle of the pie, where zero recoil is the widest and 100 recoil is the narrowest
const maxSpread = 180; // degrees

export default {
  props: ['value'],
  setup(props) {
    // Convert to radians
    const direction = recoilDirection(props.value) * verticalScale * (Math.PI / 180);
    const x = Math.sin(direction);
    const y = Math.cos(direction);

    // Higher value means less spread
    // scaled by the spread factor (halved since we expand to either side)
    // in radians
    // flipped for negative
    const spread = ((100 - props.value) / 100)
      * (maxSpread / 2)
      * (Math.PI / 180)
      * Math.sign(direction);
    const xSpreadMore = Math.sin(direction + spread);
    const ySpreadMore = Math.cos(direction + spread);
    const xSpreadLess = Math.sin(direction - spread);
    const ySpreadLess = Math.cos(direction - spread);

    return {
      direction,
      x,
      y,
      xSpreadMore,
      ySpreadMore,
      xSpreadLess,
      ySpreadLess,
    };
  },
  components: {},
};
</script>

<style scoped>

</style>
