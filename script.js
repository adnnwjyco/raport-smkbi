

const kelas = [
    {
        nama_kelas: 'X RPL',
        lantai_kelas: 2,
        nama_wali_kelas: 'Deni Ramdani'
    },
    {
        nama_kelas: 'X TKJ',
        lantai_kelas: 2,
        nama_wali_kelas: ''
    },
    {
        nama_kelas: 'X DKV 1',
        lantai_kelas: 1,
        nama_wali_kelas: ''
    },
    {
        nama_kelas: 'X DKV 2',
        lantai_kelas: 1,
        nama_wali_kelas: ''
    },
    {
        nama_kelas: 'XI RPL',
        lantai_kelas: 4,
        nama_wali_kelas: ''
    },
    {
        nama_kelas: 'XI TKJ',
        lantai_kelas: 2,
        nama_wali_kelas: ''
    },
    {
        nama_kelas: 'XI DKV 1',
        lantai_kelas: 4,
        nama_wali_kelas: ''
    },
        {
        nama_kelas: 'XI DKV 2',
        lantai_kelas: 4,
        nama_wali_kelas: '' 
    }
]

const queryWindow = window.location.search;
const queryParams = new URLSearchParams(queryWindow);

const nama_kelas = queryParams.get('kode_kelas');
console.log(nama_kelas);

console.log(kelas[1]);