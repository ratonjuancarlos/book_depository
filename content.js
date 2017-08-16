const optionSelected = ({ target: { value }}) => {
	const displayAll = value === 'all' ? 'initial' : 'none';
	[...document.getElementsByClassName("order-status")]
		.map(o=>o.closest(".order").style.display=displayAll);

	[...document.getElementsByClassName(`order-status ${value}`)]
		.map(o=>o.closest(".order").style.display='initial');

}


const myDiv = document.getElementById("search-info");
const options = ["All","Dispatched","Cancelled"];

let selectList = document.createElement("select");
selectList.id = "change-status";
selectList.addEventListener("change", optionSelected);
myDiv.appendChild(selectList);

options.map(o=>{
	const option = document.createElement("option");
    option.value = o.toLowerCase();
    option.text = o;
    selectList.appendChild(option);
})
