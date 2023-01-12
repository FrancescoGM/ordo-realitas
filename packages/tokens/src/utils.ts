export const utils = {
  noOfLines: (value: number) =>
    value > 0 && {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      lineHeight: value,
      '-webkit-line-clamp': value,
      '-webkit-box-orient': 'vertical',
    },
}
