{
    let person = {
        name: 'jack',
        age: 18,
        country: 'usa'
    }
    function only(obj,keys){
        obj = obj || {}
        if( typeof keys == 'string') keys = keys.split(/ +/)
        return keys.reduce((ret,key)=>{
            if(obj[key] == null) return ret
            ret[key] = obj[key]
            return ret
        },{})
    }

    let test = only(person,['name','age'])
    console.log(test)

    let testStr = only(person,'name country')
    console.log(testStr)
}