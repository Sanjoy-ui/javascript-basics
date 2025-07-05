// map

// map e duplicate value hoi na

const map = new Map(); // const variable er nam  = new Map()

map.set("in", "india"); // map created
map.set("dl", "delhi");
map.set("kn", "karnataka"); // map.set () kita set kortam

map.set("in", "india"); // eda nito na it duplicated

console.log(map);

for (const [key, value] of map) {
  // normal for of o lagan jai but key loge value o neon jaibo
  //  just [kita lakbo mention koro     key, value] diya dimu
  console.log(key, ":-", value);
}
