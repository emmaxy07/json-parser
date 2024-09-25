const input = `{
  "key": "value",
  "key-n": 101,
  "key-o": {},
  "key-l": []
}
`

function isValidJSONString(str) {
    try {
        const jsonObject = JSON.parse(str);
        if( typeof jsonObject !== 'object' && jsonObject === null){
            return false;
        }
        for (const key in jsonObject){
           const value = jsonObject[key];
            if(typeof value === 'boolean' || typeof value === 'number' || typeof value === 'string' ||  value === null || typeof value === "object"){
                return true;
            } else {
                return false;
            }
        }
    } catch (e) {
        return false;
    }
  }
  
  if (isValidJSONString(input)) {
    console.log('Valid JSON');
    process.exit(0); 
} else {
    console.log('Invalid JSON');
    process.exit(1);
}

  