// function Product(name, price , prices) {
//     this.name = name;
//     this.price = price;
//     this.prices = prices;
//     console.log(name , price )
//   }
  
//   function Food(name, price ) { //这个是两个参数
//     Product.call(this, name, price );
//     this.category = 'food';
//     // console.log(name,price)
//   }


//   var Food = new Food('fang' , 3)




function y(e){
    console.log(this)
}



y.call(String(2))


