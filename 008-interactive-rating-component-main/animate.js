// svg animation
const linePath = document.querySelector('.svg-line path')
const pathLen = linePath.getTotalLength()
linePath.style.cssText = `
fill:none;
stroke:#e6e6e6;
stroke-width:1.1px;
stroke-dasharray:${pathLen / 100}, 5.5, 0, 0;
animation: dashOffset 7s infinite linear;
`