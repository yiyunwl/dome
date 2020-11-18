

    Array.prototype.forEach=function(fn){
        if(typeof fn !== 'function'){
            throw '参数必须是函数'
        }
        let arr = this;
        if(!Array.isArray(arr)){
            throw '必须是数组才能使用forEach方法'
        }

        for(var index=0;index<arr.length;index++){
            fn(arr[index],index,arr)
        }
    }



    Array.prototype.filter = function(fn){
        if(typeof fn !=='function'){
            throw '参数必须是函数'
        }
        let arr = this;
        if(!Array.isArray(arr)){
            throw '必须是数组才能使用forEach方法'
        }
        let result = [];
        for(var index=0;index<arr.length;index++){
            let invokedReturn = fn(arr[index],index,arr)
            if(invokedReturn){
                result.push(arr[index])
            }

        }
        return result;
    }


    Array.prototype.reduce=function(fn,accumulator){
        if(typeof fn !=='function'){
            throw '参数必须是函数'
        }
        let arr = this;
        if(!Array.isArray(arr)){
            throw '必须是数组才能使用forEach方法'
        }

        let index=0;
        if(!accumulator){
            index = 1;
            accumulator=arr[0]
        }
        for(;index<arr.length;index++){
            let invokedReturn = fn(accumulator,arr[index],index,arr)
            accumulator = invokedReturn;
        }
        return accumulator;
    }

    Array.prototype.map=function(fn){
        if(typeof fn !== 'function'){
            throw '参数必须是函数'
        }
        let arr = this;
        if(!Array.isArray(arr)){
            throw '必须是数组才能使用forEach方法'
        }
        for(var index=0;index<arr.length;index++){
            fn(arr[index],index,arr)
        }

    }

    function arrs(params) {
        return params *2;
    }
    map(arr)







