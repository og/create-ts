;`
# percent

安全的计算百分比，主要用于避免意外除0导致的 \`Infinity\` 错误。

`

import { percent } from "../lib"

test('part 3  total 44 return percent 7', () => {
    expect(percent(3,44)).toBe(7)
})

test('percent 会处理 total 为 0 的情况，避免出现 2/0 = Infinity 的错误', () => {
    expect(percent(2,0)).toBe(0)
})


test('当 part 大于 total 时候 percent 会返回大于 100 的数', () => {
    expect(percent(11,5)).toBe(220)
})

;`
放心的使用 percent 处理日常百分比计算吧
`

console.log("Good luck")