const formInput = document.getElementById('formInput');
const listInput = document.getElementById('listInput');
const addBtn = document.getElementById('addBtn');
const listContainer = document.querySelector('.listContainer');
const navBtn = document.getElementById('navBtn');
const sidebarContainer = document.getElementById('sidebarContainer');


formInput.addEventListener('submit', function(e) {
    e.preventDefault();
});



addBtn.addEventListener('click', function(e) {
    if (listInput.value != "")  {
    // console.log(listInput.value);
    addNewList(listInput.value);
    listInput.value = '';
    
    }
});

navBtn.addEventListener("click", () => {
    sidebarContainer.classList.toggle("invisible");

});







addNewList = () => {
    let listWrapper = document.createElement('div');
    listWrapper.classList.add('listWrapper');

    listWrapper.innerHTML = `                <div class="flex gap-3 justify-center items-center mb-3">
    <div class="w-full backdrop-blur-md drop-shadow-md bg-[rgb(225,225,225)] px-4 py-2 rounded-lg flex justify-between gap-3 items-center">
        <p id="textList" class="max-w-none w-full">${listInput.value}</p>
        <button id="checkBtn" class="w-7 h-7 bg-[#149564] flex justify-center items-center rounded-lg">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffffff" viewBox="0 0 256 256"><path d="M243.33,90.91,114.92,219.31a16,16,0,0,1-22.63,0l-71.62-72a16,16,0,0,1,0-22.61l24-24a16,16,0,0,1,22.57-.06l36.64,35.27.11.11h0l92.73-91.37a16,16,0,0,1,22.58,0l24,23.56A16,16,0,0,1,243.33,90.91Z"></path></svg>
    </button>
    </div>
    <button id="deleteBtn" class="bg-red-500 w-10 h-10 flex rounded-lg justify-center items-center hover:bg-red-600">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#ffff" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path></svg>
    </button>
    </div>`;

    let deleteBtn = listWrapper.querySelector('#deleteBtn');

    deleteBtn.addEventListener('click',function(e) {
        listWrapper.remove();
    });
    listContainer.appendChild(listWrapper);

    let checkBtn = document.querySelector('#checkBtn');
    let textList = document.querySelector('#textList');

    checkBtn.addEventListener('click',function(e) {
        textList.classList.toggle('line-through');
    });

}
