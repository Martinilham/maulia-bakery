import Card1 from "./Card1";

const FrameComponent6 = () => {
  return (
    <section className="self-stretch text-center flex flex-row items-start justify-center pt-0 mx-auto box-border max-w-full mt-10 text-21xl text-black font-body-large mq750:pl-10 mq750:pr-[39px] mq750:box-border">
      <div className="flex-1 flex flex-col items-end justify-start  max-w-full mq750:gap-[43px] mq450:gap-[21px]">
        <div className="w-full flex m-auto flex-col items-end justify-start gap-[60px] max-w-full mq1050:gap-[30px]">
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
      </div>
    </section>
  );
};

export default FrameComponent6;
