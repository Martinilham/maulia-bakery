import React, { useState, useEffect ,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

export default function DetailOrder() {
  const [detail, setDetail] = useState({ items: [] });
  const printRef = useRef();
  const navigate = useNavigate();


  const generatePdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: [canvas.width, canvas.height]
    });

    pdf.addImage(data, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`Nota Pembelian ${detail.namapemesan}_${detail.notlpn}.pdf`);
  };


  useEffect(() => {
    const storedPesanan = localStorage.getItem("transaksi");
    if (storedPesanan) {
      setDetail(JSON.parse(storedPesanan));
    }
  }, []);

  const jumlah = (harga, qty) => {
    return harga * qty;
  };
  useEffect(()=>{
    generatePdf()
  })

  useEffect(()=>{
    setTimeout(()=>{
      navigate("/pesan")
    },10000)
  })

  const listpesan = detail.items.map((item, index) => ({
    No: index + 1,
    nama: item.namaproduk,
    harga: item.harga,
    jumlah: item.jumlah,
    disc: item.diskon || "discount",
    total: jumlah(item.harga, item.jumlah),
  }));

  return (
    <div className='w-full lg:ml-2 mx-20 lg:mx-1 mt-6 lg:w-full flex flex-col'>
      <h1 className='uppercase'>Transaksi Pesanan</h1>
      <div className='flex flex-col w-1/5'>
        <h3 className='bg-gray'>Transaksi</h3>
        <table>
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
          </tbody>
        </table>
      </div>
      <div className='flex w-1/2'>
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
                <td style={{ border: '1px solid black' }}>{e.disc}</td>
                <td style={{ border: '1px solid black' }}>{e.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h4>Total Belanja: {detail.total}</h4>
    </div>
  );
}
