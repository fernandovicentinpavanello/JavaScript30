let tbcal = ' ';
const useInput = document.getElementById('useInput');
const compInp = document.getElementById('compOut');

function calcad(value) {
  tbcal += value;
  useInput.value = tbcal;
}

function removech() {
  tbcal = tbcal.substring(0, tbcal.length - 1);
  useInput.value = tbcal;
}

function execm() {
  if (tbcal.length == 0 || tbcal == '') {
    alert('Please, add a input');
    return
  }
  try {
    ans = eval(tbcal);
    compInp.value = ans;
  }
  catch (err) {
    alert('Invalid input');
  }
}

function reset() {
  useInput.value = '';
  compInp.value = ''; 
  tbcal = '';
}

