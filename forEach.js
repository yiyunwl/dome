

    var arr=['毛巾','牙刷','被子'];
    
    // 获取数组的第一个数据
    var first=arr[0];
    console.log(first)

    //获取数组的最后一个数据
    var last=arr[arr.length -1];
    console.log(last)

    // 遍历循环获取数组的数据和下标
    arr.forEach(function(item,index,arr){
        console.log(item,index)
    })

    //添加数据到数组的前面
    var dataFirst = arr.unshift('外套')

    //添加数据到数组的后面
    var newshop ='鞋子';
    this.arr.push(newshop)
    console.log(arr)

    // 删除第一个数组的数据
    var firsts= arr.shift();
    console.log(firsts)

    //删除最后一个数组的数据
    var lasts = arr.pop();
    console.log(lasts)

    // 通过索引找出某个数组
    arr.push('汽车')
    var pos=arr.indexOf('汽车')
    console.log(pos)

    //通过索引删除某个数组
    var poss = arr.splice(pos,1)
    console.log(arr)

    // 删除数组里面多个数据
    var data = ['小明','小黑','小红','小花','小白','小甜'];
    
    var q=1;

    var w=2;

    var newdata = data.splice(q,q)

    console.log(data)

    console.log(newdata)


    // 通过循环遍历，利用push来把里面的数据push成一个新newdats的数组

    var newdatas = [];
    data.forEach(function(item,index,arr){
        // console.log(item)
        newdatas.push(item)

    })

    console.log(newdatas )



    //复制一个新数组
    var newdatess = newdatas.slice()+data.slice();
    console.log(newdatess)






  