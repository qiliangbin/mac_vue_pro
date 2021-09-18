/**
 * @time 时间戳
 * @charcater 连接字符
 */
export function handleTimestamp(time, flag) {
  if (!time) return '时间戳为空'
  let t = time*1000
  let Y = new Date(t).getFullYear()
  let M = new Date(t).getMonth() + 1
  let D = new Date(t).getDate()
  let H = new Date(t).getHours()
  let m = new Date(t).getMinutes()
  let s = new Date(t).getSeconds()
  let Week = new Date(t).getDay()
  let and = flag ? flag.toString() : '-'
  console.log(flag,'2112')
  return `${Y}-${M}-${D} ${H}:${m}:${s}`
}
export function handleObj(obj) {
  for (let key in obj) {
    let newKey = obj[key];
    if (newKey) {
      obj[newKey] = key;
      delete obj[key];
    }
  }
  return obj
}