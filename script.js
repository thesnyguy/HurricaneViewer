const startYear = 1851;
const endYear = 2015;

const yearSelect = document.getElementById("year-select");
for (let year = startYear; year <= endYear; year++) {
  let option = document.createElement("option");
  option.value = year;
  option.text = year;
  yearSelect.add(option);
}

yearSelect.addEventListener("change", function() {
  let year = this.value;
  let mapUrl = `hr${year}.html`;
  document.getElementById("map").innerHTML = `<iframe src="${mapUrl}" frameborder="0" height="750" width="100%"></iframe>`;
});
