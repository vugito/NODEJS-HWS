let list = document.querySelector("#task-list");
let button = document.querySelector("#checkBtn");
let radioButtons = document.querySelectorAll("input[name=radioGroup]");

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", async () => {
    const selectedValue = radioButton.value;

    getFilteredList(selectedValue);
  });
});

const getFilteredList = async (value) => {
  try {
    let response = await fetch(`http://localhost:7000/items?filter=${value}`);
    console.log(value);
    let data = await response.json();

    list.innerHTML = "";

    data.forEach((element) => {
      let li = document.createElement("li");

      li.classList.add("task-list-item");

      li.innerHTML = `
          <div class="list-item-con"> 
          <h3>${element.name}</h3>
          <span>Город: ${element.city}</span>
          <span>Цена: ${element.price} ${element.currency}</span>
          <span>Количество комнат: ${element.room}</span>
          <span>Количество этажей в здании: ${element.floorCount}</span>
          <span>Этаж: ${element.floor}</span></div>
           `;
      list.appendChild(li);
    });

    console.log(data);
  } catch (error) {
    console.error("Error => ", error);
  }
};

button.addEventListener("click", getList);
