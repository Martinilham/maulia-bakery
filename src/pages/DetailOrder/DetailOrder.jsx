import React from 'react'
import { useState,useEffect } from 'react';


export default function DetailOrder() {


    const [detail,setDetail] = useState()
    useEffect(() => {
        const storedPesanan = localStorage.getItem("transaksi");
        if (storedPesanan) {
          setDetail(JSON.parse(storedPesanan));
        }
      }, []);

  return (
    <div className='w-full mx-20 mt-6 flex flex-col'>
        <h1 className='uppercase'>Transaksi Pesanan</h1>
        <div className='flex flex-col w-1/5'>
            <h3 className='bg-gray'>Transaksi</h3>
            <table>
                {detail.map((e)=>(
                    
                    <>
                        <tr>
                    <td>OrderID</td>
                    <td>:</td>
                    <td>{e.idpemesan}</td>
                </tr>
                <tr>
                    <td>Nama Pemesan</td>
                    <td>:</td>
                    <td>{e.namapemesan}</td>
                </tr>
                <tr>
                    <td>Tanggal</td>
                    <td>:</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>{alamat}</td>
                </tr>
                <tr>
                    <td>No. Telepon</td>
                    <td>:</td>
                    <td>{e.notlpn}</td>
                </tr>
                <tr>
                    <td>Status Pembayaran</td>
                    <td>:</td>
                    <td>{e.statusbayar}</td>
                </tr>
                    </>
                ))}
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

                        </tr>
                    </tbody>
                </table>
        </div>
        <h4>Total Belanja : </h4>
    </div>
  )
}
