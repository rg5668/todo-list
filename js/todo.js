// let 지역변수, var 전역변수, const 상수
// #은 id, .은 class
const todoinput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const todobutton = document.querySelector("#todo-button");
//엔터로 추가
todoinput.addEventListener("keypress", (e) => {
    if(e.keyCode === 13) {
        if(todoinput.value == "") {
            alert("할 일 입력 해주세요.");
            return false;
        }
        generateTodo(todoinput.value);
        //엔터키 할때마다 리셋
        todoinput.value = "";        
    }
    console.log(e);
});
// 버튼으로 추가
todobutton.addEventListener("click", (e)=> {
    generateTodo(todoinput.value);
});
//li 추가
const generateTodo = (todo) => {
    const li = document.createElement("li");
    const likeSpan = generateLike();
    const itemSpan = generateItem(todo);
    const manageSpan = generateManage(todo);

    li.appendChild(likeSpan);
    li.appendChild(itemSpan);
    li.appendChild(manageSpan);

    todoList.appendChild(li);
};

const generateItem = (todo) => {
    const span = document.createElement("span");
    span.classList.add("todo-item");
    span.innerText = todo;
    return span;    
};

const generateLike = () => {
    const span = document.createElement("span");
    span.classList.add("todo-like");
    
    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.classList.add("like");
    icon.innerText = "favorite_border";
    span.appendChild(icon);

    span.addEventListener("click", () => {
        // if (icon.innerText === 'favorite_border') {
        //     icon.innerText = "favorite";
        // } else {
        //     icon.innerText = "favorite_border";
        // }
        // 삼항연산자
        icon.innerText === 'favorite_border'? icon.innerText="favorite" : icon.innerText="favorite_border";
    });
    return span;
};

const generateManage = () => {
    const span = document.createElement("span");
    span.classList.add("todo-manage");
    
    const icon1 = generateIcon("check", "check");
    const icon2 = generateIcon("clear", "clear");

    // const icon1 = document.createElement("i");
    // const icon2 = document.createElement("i");
    
    // icon1.classList.add("material-icons");
    // icon1.classList.add("check");
    // icon1.innerText="check";
    // icon2.classList.add("material-icons");
    // icon2.classList.add("clear");
    // icon2.innerText="clear";

    span.appendChild(icon1);
    span.appendChild(icon2);

   

    icon1.addEventListener("click", (e) => {
        if(icon1.innerText === 'check') {
            //console.log(e);
            const li = e.target.parentNode.parentNode;
            li.classList.add("done");
        }
    });

    icon2.addEventListener("click", (e) => {
        if(icon2.innerText === 'clear') {
            const li = e.target.parentNode.parentNode;
            li.remove();
        }
    });

    return span;
}

const generateIcon = (_class, _name) => {
    const icon = document.createElement("i");
    icon.classList.add("material-icons");
    icon.classList.add(_class);
    icon.innerText = _name;
    return icon;
}
