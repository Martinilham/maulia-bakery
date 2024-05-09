import Card1 from "./Card1";

const FrameComponent6 = () => {
  return (
    <section className="w-[1424px] flex flex-row items-start justify-end py-0 px-16 box-border max-w-full text-left text-13xl text-black font-body-large mq750:pl-8 mq750:pr-8 mq750:box-border">
      <div className="flex-1 flex flex-row items-start justify-center gap-[16px] max-w-full lg:flex-wrap">
        <div className="flex flex-row  lg:flex-col gap-[16px]">
          <Card1
            selectFood="/select-food@2x.png"
            title="Pilih Jenis Kue"
            description="anda dapat memilih jenis kue yang akan anda beli"
            propHeight="unset"
            propWidth="308px"
            propMinWidth="unset"
            propMinHeight="unset"
          />
          <Card1
            selectFood="/customization@2x.png"
            title="Bahan-Bahan"
            description="kami menggunakan bahan unggul yang pastinya akan menciptakan cita rasa kue yang lezat."
            propHeight="unset"
            propWidth="308px"
            propMinWidth="unset"
            propMinHeight="unset"
          />
          <Card1
            selectFood="/placement@2x.png"
            title="Metode Pembelian"
            description="anda dapat melakukan pemesanan setelah menambahkan ke keranjang dan melakukan pembayaran sesuai metode yang anda pilih. "
            propHeight="unset"
            propWidth="308px"
            propMinWidth="unset"
            propMinHeight="unset"
          />
          <Card1
            selectFood="/pick-up@2x.png"
            title="Cod/Pesan Antar"
            description="setelah melakukan pemesana, untuk metode pengambilan barang dengan melakukan cod atau dapat melakukan pesan antar tetapi harus melakukan konfirmasi dengan kami melalui whatsapp. "
            propHeight="unset"
            propWidth="308px"
            propMinWidth="unset"
            propMinHeight="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
