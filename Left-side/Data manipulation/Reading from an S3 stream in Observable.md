---
publish: true
tags: data
created: 2022-03-12
updated: 2022-03-15
---

It took me hours to finally find how to write this function. This seems to work. As usual, it was something simple yet very hard to find—the missing *async* at the beginning. 

```js
async function readAndConvert2(stream){

  let output = "";
  let counter = 0;
  const reader = stream.getReader();
  while(true){
    const { value, done } = await reader.read(); 
    counter++;
    output += new TextDecoder().decode(value);
    if(done){
      break;
    }
  }
  return output;
}
}
```
And we don’t even need to use the async call
```js
async function readAndConvert2(stream){

  let output = "";
  let counter = 0;
  const reader = stream.getReader();
  while(true){
    const { value, done } = await reader.read(); 
    counter++;
    output += new TextDecoder().decode(value);
    if(done){
      break;
    }
  }
  return output;
}
}
```