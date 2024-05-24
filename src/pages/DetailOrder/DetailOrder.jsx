import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function DetailOrder() {
  const [detail, setDetail] = useState({ items: [] });
  const printRef = useRef();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const downloadPDF = () =>{
    const capture = document.querySelector('.print');
    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('receipt.pdf');
    })
  }

  useEffect(() => {
    const storedPesanan = localStorage.getItem("transaksi");
    if (storedPesanan) {
      setDetail(JSON.parse(storedPesanan));
    }
  }, []);

  useEffect(() => {
      downloadPDF().then(() => {
        setTimeout(() => {
          navigate("/pesan");
        }, 10000);
      });
  }, [detail]);

  const jumlah = (harga, qty) => {
    return harga * qty;
  };
  const rupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };


  const listpesan = detail.items.map((item, index) => ({
    No: index + 1,
    nama: item.namaproduk,
    harga: item.harga,
    jumlah: item.jumlah,
    disc: item.diskon || "discount",
    total: jumlah(item.harga, item.jumlah),
  }));

  return (
    <div className='text-xs w-full print mx-4 lg:mx-1 mt-6 lg:w-full flex flex-col'>
      <h1 className='uppercase lg:text-center text-center'>Transaksi Pesanan</h1>
      <div className='flex flex-col w-full lg:w-full mx-2 lg:mx-2'>
        <h3 className='bg-gray'>Transaksi</h3>
        <table className='table-row text-xs' >
          <tbody >
            <tr >
              <td >OrderID</td>
              <td>:</td>
              <td>{detail.idpemesan}</td>
            </tr>
            <tr>
              <td>Nama Pemesan</td>
              <td>:</td>
              <td>{detail.namapemesan}</td>
            </tr>
            <tr>
              <td>Tanggal</td>
              <td>:</td>
              <td>{detail.tglorder}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td>:</td>
              <td>{detail.alamat}</td>
            </tr>
            <tr>
              <td>No. Telepon</td>
              <td>:</td>
              <td>{detail.notlpn}</td>
            </tr>
            <tr>
              <td>Status Pembayaran</td>
              <td>:</td>
              <td>{detail.statusbayar}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex w-full mx-2 lg:mx-2 mt-2'>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr style={{ border: '1px solid black' }}>
              <th style={{ border: '1px solid black' }}>No</th>
              <th style={{ border: '1px solid black' }}>Nama Barang</th>
              <th style={{ border: '1px solid black' }}>Harga</th>
              <th style={{ border: '1px solid black' }}>Jumlah</th>
              <th style={{ border: '1px solid black' }}>Disc</th>
              <th style={{ border: '1px solid black' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {listpesan.map((e) => (
              <tr style={{ border: '1px solid black' }} key={e.No}>
                <td style={{ border: '1px solid black' }}>{e.No}</td>
                <td style={{ border: '1px solid black' }}>{e.nama}</td>
                <td style={{ border: '1px solid black' }}>{e.harga}</td>
                <td style={{ border: '1px solid black' }}>{e.jumlah}</td>
                <td style={{ border: '1px solid black' }}>{e.disc}%</td>
                <td style={{ border: '1px solid black' }}>{e.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4 className='mx-2 lg:mx-2'>Total Belanja: {rupiah(detail.total)}</h4>
    </div>
  );
}
