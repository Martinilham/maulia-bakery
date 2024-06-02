import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function DetailOrderPesanan({ catatan }) {
  const [detail, setDetail] = useState({});
  const printRef = useRef();
  const navigate = useNavigate();

  const downloadPDF = async () => {
    const capture = document.querySelector('.print');
    const canvas = await html2canvas(capture);
    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF('p', 'mm', 'a4');
    const componentWidth = doc.internal.pageSize.getWidth();
    const componentHeight = doc.internal.pageSize.getHeight();
    doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
    doc.save('DetailOrder.pdf');
  };

  useEffect(() => {
    const storedPesanan = localStorage.getItem("orders");
    if (storedPesanan) {
      const parsedPesanan = JSON.parse(storedPesanan);
      if (parsedPesanan.length > 0) {
        setDetail(parsedPesanan[0]); 
      }
    }
  }, []);
  

  const jumlah = (harga, qty, diskon) => {
    const totalharga = harga * qty;
    const Diskon = totalharga * (diskon / 100);
    const setelah_diskon = totalharga - Diskon;
    return setelah_diskon;
  };
  
  const rupiah = (number) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });

    return formatter.format(number);
  };

  return (
    <div className='w-full'>
    
      <div className='text-xs min-w-full print mt-6 lg:w-full flex flex-col'>
        <h1 className='uppercase text-center lg:text-center'>Transaksi Pesanan</h1>
        <div className='flex flex-col w-full lg:w-full mx-2'>
          <h3 className='bg-gray w-1/2'>Transaksi</h3>
          <table className='table-row text-xs'>
            <tbody>
              <tr>
                <td>OrderID</td>
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
              <tr>
                <td>Status Diterima</td>
                <td>:</td>
                <td>{detail.statusditerima}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='flex w-full mx-2 lg:mx-2 mt-2'>
          <table style={{ borderCollapse: 'collapse', width: '98%' }}>
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
              {detail.items &&
                detail.items.map((e, index) => (
                  <tr style={{ border: '1px solid black' }} className='text-center' key={index + 1}>
                    <td style={{ border: '1px solid black' }}>{index + 1}</td>
                    <td style={{ border: '1px solid black' }}>{e.namaproduk}</td>
                    <td style={{ border: '1px solid black' }}>{rupiah(e.harga)}</td>
                    <td style={{ border: '1px solid black' }}>{e.jumlah}</td>
                    <td style={{ border: '1px solid black' }}>{e.diskon}%</td>
                    <td style={{ border: '1px solid black' }}>{rupiah(jumlah(e.harga, e.jumlah, e.diskon))}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <h4 className='mx-2 lg:mx-2'>Total Belanja: {rupiah(detail.total)}</h4>
        <p className='mx-2 lg:mx-2'>
          Catatan:<span className='font-bold'>*Untuk konfirmasi pembayaran, silakan datang ke outlet MauliaBakery yang beralamat di RT 02 RW 02, Dusun Sanggrahan, Desa Sukorejo, Kecamatan Tugu, Kabupaten Trenggalek. Pastikan Anda membawa bukti pembayaran untuk mempermudah proses verifikasi. Terima kasih atas pesanan Anda.*</span>
        </p>
        
      </div>
        <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}
