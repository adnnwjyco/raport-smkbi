var select_kanan = document.getElementById('select_kanan')
var select_kiri = document.getElementById('select_kiri')
var bulat_lantai_1 = document.getElementById('bulat_lantai_1')
var bulat_lantai_2 = document.getElementById('bulat_lantai_2')
var bulat_lantai_3 = document.getElementById('bulat_lantai_3')
var bulat_lantai_4 = document.getElementById('bulat_lantai_4')

var code_lantai1 = document.getElementById('code_lantai1')
var code_lantai2 = document.getElementById('code_lantai2')
var code_lantai3 = document.getElementById('code_lantai3')
var code_lantai4 = document.getElementById('code_lantai4')

select_kanan.addEventListener('click', function() {
    if (code_lantai1.textContent === '1') {
        bulat_lantai_1.style.background = 'grey';
        bulat_lantai_2.style.background = 'blue';

        setTimeout(function() {
        code_lantai1.textContent = '0';
        code_lantai2.textContent = '1';
        }, 100);
        
    }

    if (code_lantai2.textContent === '1') {
        bulat_lantai_2.style.background = 'grey';
        bulat_lantai_3.style.background = 'blue';

        setTimeout(function() {
        code_lantai2.textContent = '0';
        code_lantai3.textContent = '1';
        }, 100);

    }

    if (code_lantai3.textContent === '1') {
        bulat_lantai_3.style.background = 'grey';
        bulat_lantai_4.style.background = 'blue';

        setTimeout(function() {
        code_lantai3.textContent = '0';
        code_lantai4.textContent = '1';
    }, 100); 

    }

    if (code_lantai4.textContent === '1') {
        bulat_lantai_4.style.background = 'grey';
        bulat_lantai_1.style.background = 'blue';

        setTimeout(function() {
        code_lantai4.textContent = '0';
        code_lantai1.textContent = '1';
    }, 100); 

    }

});



select_kiri.addEventListener('click', function() {
    if (code_lantai1.textContent === '1') {
        bulat_lantai_1.style.background = 'grey';
        bulat_lantai_4.style.background = 'blue';

        setTimeout(function() {
        code_lantai1.textContent = '0';
        code_lantai4.textContent = '1';
        }, 100);
        
    }

    if (code_lantai2.textContent === '1') {
        bulat_lantai_2.style.background = 'grey';
        bulat_lantai_1.style.background = 'blue';

        setTimeout(function() {
        code_lantai2.textContent = '0';
        code_lantai1.textContent = '1';
        }, 100);

    }

    if (code_lantai3.textContent === '1') {
        bulat_lantai_3.style.background = 'grey';
        bulat_lantai_2.style.background = 'blue';

        setTimeout(function() {
        code_lantai3.textContent = '0';
        code_lantai2.textContent = '1';
    }, 100); 

    }

    if (code_lantai4.textContent === '1') {
        bulat_lantai_4.style.background = 'grey';
        bulat_lantai_3.style.background = 'blue';

        setTimeout(function() {
        code_lantai4.textContent = '0';
        code_lantai3.textContent = '1';
    }, 100); 

    }

})