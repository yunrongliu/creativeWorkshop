{
    let testArr = [
        {
            pcn: '顶端',
            pen: 'as',
            children:[
                {
                    pcn: '方法',
                    pen: 'ff',
                    children: [
                        {
                            pcn: '仿佛',
                            pen: 'gg'
                        }
                    ]
                }
            ]
        },
        {
            pcn: '打开的',
            pen: 'fe',
            children: [
                {
                    pcn: '各他',
                    pen: '感觉'
                }
            ]
        }
    ]
    function fb(arr){
        return arr.reduce((ret,key)=>{
            key.show = false
            ret.push(key)
            if(typeof key.children != 'undefined' && key.children.length>0){
                fb(key.children)
            }
            return ret
        },[])
    }
    console.log(fb(testArr))
}