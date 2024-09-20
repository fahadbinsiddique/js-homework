// Ans to the question no 1
let one = ['apple','banana','cherry'];
let ones = one.toString();
console.log('1', ones);

//Ans to the question no 2
let two = [10,20,30,40,50];
let twos = two.at(2);
console.log('2',twos);

//Ans to the question no 3
let three = ['red','green','blue'];
let separated = ('-');
let threes = three.join(separated);
console.log('3',threes);

//Ans to the question no 4
let four = [1,2,3,4,5];
four.pop();
console.log('4',four);

// Ans to the question no 5
let five = ['apple','banana'];
five.push('grape');
console.log('5',five);

 // Ans to the question no 6
 let six = ['car','bike','bus'];
 six.shift();
 console.log('6',six);

 //Ans to the question no 7
 let seven = ['boat','ship'];
 seven.unshift('train','plane');
 console.log('7',seven);

 //Ans to the question no 8
 let eight = ['dog','cat','bird'];
 delete eight[1];
 console.log('8',eight);

 //Ans to the question no 9
 let nine = [1,2,3];
 let ninee = [4,5,6];
 let nines = nine.concat(ninee);
 console.log('9',nines);

 // Ans to the question no 10
 let ten = ['a','b','c','d','e','f'];
 ten.splice(2,2  );
 console.log('10',ten);

 //Ans to the question no 11
 let eleven = ['first','second','third','fourth','fifth','sixth','seventh'];
 let elevens = eleven.at(4);
 console.log('11',elevens);

 //Ans to the question no 12
 let longstring = "apple banana cherry date elderberry fig grape honeydew kiwi lemon mango nectarine orange papaya quince raspberry strawberry tangerine ugli vine watermelon yam zucchini apricot blackberry cantaloupe elderberry fennel grapefruit honeycrisp jackfruit kumquat lime melon nectar olive peach pear plum pomegranate rhubarb starfruit tomato vanilla";
 let index = longstring.indexOf('fennel');
 console.log('12',index);

 //Ans to the question no 13
 let thirteen = ['apple','banana','cherry','date','fig'];
 thirteen.pop();
 thirteen.pop();
 console.log('13',thirteen);

 //Ans to the question no 14
 let forteen = ['dog','cat','fish','bird'];
 let fortee = ',';
 let forteens = forteen.join(fortee);
 console.log('14',forteens);

 //Ans to the question no 15
 let sixteen = ['apple', 'orange','banana','grape'];
 let sixteens = sixteen.join('-');
 console.log('15',sixteens);

 //Ans to the question no 16
 let fifteen = ['b','c','d'];
 fifteen.splice(0,0, 'a','b','c');
 console.log('16',fifteen);

 //Ans to the question no 17
 let seventeen = [1,2,3,4,5,6];
 delete seventeen[3];
 console.log('17',seventeen);

 //Ans to the question no 18
 let eighteen = [1,2,3,];
 let eighteeen = [4,5,6];
 let total = eighteen.concat(eighteeen);
 let totals = total.slice(0,4);
 console.log('18',totals);

 //Ans to the question no 19
 let nineteen = ['a','b','c','d','e'];
 nineteen.splice(1,2,'x','y');
 console.log('19',nineteen);

 //Ans to the question no 20
 let twenty = [10,20,30,40,50];
 let twentys = twenty.slice(1,4);
 console.log('20',twentys);

 //Ans to the question no 21
 let twentyone = [1,2,3,4,5];
 let twentyones = twentyone.toString();
 let strings = twentyones.split(',')
 console.log('21 string',twentyones);
 console.log('21 array of strings',strings);

//Ans to the question no 22
let twentytwo = ['a','b','c','d','e','f'];
let first =  twentytwo.at(0); 
let last  =  twentytwo.at(-1);
console.log('22',first);
console.log('22',last);