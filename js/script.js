
function switch_pvz_preview_img() {
  var files = [
    "00.jpg",
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
  ];
  var i = Math.floor(Math.random() * files.length);
  var img_url = '../images/pvz/' + files[i];
  document.getElementById('pvz_preview').src = img_url;
}
