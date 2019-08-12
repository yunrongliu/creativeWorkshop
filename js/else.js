{
    function elseObj(obj,keys){
        let copyObj = null
        copyObj = Object.keys(obj) //keys只能拿到
        if(typeof keys =='string') keys = keys.split(/ +/)
        return copyObj.reduce((ret,key)=>{
            if(keys.includes(key)) return ret;
            ret[key] = obj[key]
            return ret
        },{})
    }
    let o1 = {
        date:'2018-05-06',
        year:'2018',
        month:'05',
        day:'06'
    }
    let testObj = elseObj(o1,'date')
    console.log(testObj)
}

{
 //使用entries实现
    function elseObj(obj,keys){
        obj = Object.entries(obj)
        if(typeof keys =='string') keys = keys.split(/ +/)
        return obj.reduce((ret,key)=>{
            if(keys.includes(key[0])) return ret
            ret[key[0]] = key[1]
            return ret
        },{})
    }
    let o1 = {
        date:'2018-05-06',
        year:'2018',
        month:'05',
        day:'06'
    }
    let testObj = elseObj(o1,'date')
    console.log(testObj)
}

{
    //升级 指定新key取代旧key，位置也取代
    function elseObj(obj,oldKey,newKey){
        obj = Object.entries(obj)
        return obj.reduce((ret,key)=>{
            if(key[0] == oldKey){
                ret[newKey] = ''
                return ret
            } 
            ret[key[0]] = key[1]
            return ret
        },{})
    }
    let o1 = {
        date:'2018-05-06',
        year:'2018',
        month:'05',
        day:'06'
    }
    let testObj = elseObj(o1,'month','age')
    console.log(testObj)
}