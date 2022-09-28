const [cost_input, unit_input, margin_input] = [
  document.querySelector(`.cost`),
  document.querySelector(`.unit`),
  document.querySelector(`.margin`),
];
const profit = document.querySelector(`.profit`);
const total_cost = document.querySelector(`.total_cost`);
const revenue = document.querySelector(`.revenue`);
const selling_price = document.querySelector(`.selling_price`);
let cost = 0;
let unit = 0;
let margin = 0;

const inputs = [cost_input, unit_input, margin_input];
//input functions
function input_clb(event) {
  let e = event.target;
  let number = parseFloat(e.textContent);
  let current = event.target.parentElement.id;

  if (!isNaN(number)) {
    if (current == `cost`) {
      cost = number;
    }
    if (current == `unit`) {
      unit = number;
      total_cost.textContent = cost * unit;
    }
    if (current == `margin`) {
      margin = number;
      profit.textContent = cost * unit + margin * unit - cost * unit;
      revenue.textContent = cost * unit + margin * unit;
      selling_price.textContent = cost + margin;
    }
  }
}

// creating input element to dynamically to allow contentEditable
inputs.forEach((input) => {
  let para = document.createElement('p');
  let node = document.createTextNode('');
  para.appendChild(node);
  para.contentEditable = true;
  input.append(para);

  para.addEventListener(`input`, input_clb);
});
