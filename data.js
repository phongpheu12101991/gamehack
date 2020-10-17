let character = [
  {
    id: 0,
    name: "Phong",
    completed: [],
    cimage: "",
  },
  {
    id: 1,
    name: "xxx",
    complete: [],
    cimage: "",
  },
];

// let divanswer1 = document.getElementById("divanswer1");

let screendata = [
  {
    question: `Bạn vừa mua 1 cái bảng tên cho ngôi nhà, viết lên nó nào!<br> Tạo 1 biến tên houseName, gán giá trị là tên bạn cho nó.<br>var <input id='input1'/> 
    =  "<input id='input2'/>";`,
    input1: "houseName",
    input2: "Volvo",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer1",
    ins: 2,
    answer: "Volvo",
  },
  {
    question: `Bạn ở số nhà 50 đường CSS, biển số nhà bạn là ? <br> Tạo 1 biến tên houseAddress, gán giá trị là số nhà bạn cho nó.<br>var <input id='input1'/> 
    =  <input id='input2'/>;`,
    input1: "houseAddress",
    input2: "50",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer2",
    ins: 2,
    answer: "50",
  },
  {
    question: `Tính số tuổi của bạn, biết nó là tổng của 10 và 5? <br> Tạo 2 biến tên x và y, gán giá trị cho nó và tính tổng 2 số.<br>var <input id='input1'/> 
    =  5;<br>var y = <input id='input2'/>;<br>document.getElementById("demo").innerHTML = x <input id='input3'/> y;`,
    input1: "x",
    input2: "10",
    input3: "+",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer3",
    ins: 3,
    answer: "15",
  },
  {
    question: `Tạo 1 biến z, gán giá trị tổng của x + y cho nó, rồi hiển thị nó trong alert box. <br>var x =  5;<br>var y = 10;<br><input id='input1'/> <input id='input2'/> = x + y;<br><input id='input3'/>('Tôi '+ z +' tuổi');`,
    input1: "var",
    input2: "z",
    input3: "alert",
    tutorial: "https://www.w3schools.com/js/js_variables.asp",
    bg: "house.jpg",
    divanswer: "divanswer4",
    ins: 3,
    answer: "Tôi 15 tuổi",
  },
];

let maparea = {
  school: "operator",
  market: "object",
  house: `var`,
  gamecenter: "event",
  cafe: "string",
  friend: "datatype, functions",
  park: "",
  bookstore: "",
  lake: "",
};

export { character, screendata, maparea };

// phong 1-4
