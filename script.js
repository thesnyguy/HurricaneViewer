document.getElementById("year-select").addEventListener("change", function() {
  let year = this.value;
  let mapUrl = `hr${year}.html`;
  document.getElementById("map").innerHTML = `<iframe src="${mapUrl}" frameborder="0"></iframe>`;
});
