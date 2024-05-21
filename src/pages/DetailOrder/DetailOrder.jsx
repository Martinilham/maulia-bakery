import React from 'react'
import { useState,useEffect } from 'react';


export default function DetailOrder() {

    const jumlah = (harga, qty) => {
        return harga * qty;
      };

      const listpesan = [{
        No:detail.items.length,
        nama:detail.namaproduk,
        harga:detail.harga,
        jumlah:detail.jumlah,
        disc:"discount",
        total:jumlah(detail.harga,detail.jumlah),
      }]

    const [detail,setDetail] = useState({})
    useEffect(() => {
        const storedPesanan = localStorage.getItem("transaksi");
        if (storedPesanan) {
          setDetail(JSON.parse(storedPesanan));
        }
      }, []);


  return (
    <div className='w-full lg:ml-2 mx-20 lg:mx-1 mt-6 lg:w-full flex flex-col'>
        <h1 className='uppercase'>Transaksi Pesanan</h1>
        <div className=' flex flex-col w-1/5'>
            <h3 className='bg-gray'>Transaksi</h3>
            <table >
               
                    <>
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
                    <td></td>
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
                    </>

            </table>
        </div>
        <div className='flex w-full'>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Barang</th>
                            <th>Harga</th>
                            <th>Jumlah</th>
                            <th>Disc</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {listpesan.map((e)=>(
                            <>
                              <td>{e.No}</td> 
                              <td>{e.nama}</td>
                              <td>{e.harga}</td>
                              <td>{e.jumlah}</td> 
                              <td>{e.disc}</td>
                              <td>{e.total}</td>
                            </>
                        ))}
                        </tr>
                    </tbody>
                </table>
        </div>
        <h4>Total Belanja : {detail.total}</h4>
    </div>
  )
}
