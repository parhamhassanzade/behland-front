import Image from "next/image";
import BImage from "../../src/assets/images/Behnood.png";
import ColumnBlue from "@/components/ui/ColumnBlue";
export default function Home() {
  return (
    <main className="">
      <div className="flex h-screen items-start justify-end relative">
        {/* text area */}

        <ColumnBlue CusStyle={"right-25 bottom-40 -z-8"} />
        <div className="flex  items-end justify-center w-full h-full absolute bottom-20 left-90 -z-5">
          <div className="flex  items-center justify-center h-5/6">
            <h1
              className=" text-end p-0 m-0 font-extrabold tracking-tighter"
              style={{
                fontSize: "120px",
                background: "linear-gradient(to right, #888, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.01em",
                fontWeight: 900,
              }}
            >
              به لند
            </h1>
          </div>
        </div>
        <div className="flex  items-end justify-center w-full h-full absolute -bottom-20 left-60 -z-5">
          <div className="flex  items-center justify-center h-5/6">
            <h1
              className=" text-end p-0 m-0 font-extrabold tracking-tighter"
              style={{
                fontSize: "150px",
                background: "linear-gradient(to right, #888, #fff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.02em",
                fontWeight: 800,
              }}
            >
              EHLAND
            </h1>
          </div>
        </div>
        {/* image area */}
        <div className="flex items-center justify-center h-full w-3/5 z-1">
          <Image
            src={BImage}
            alt="Behland"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
        </div>


      </div>
      <div className="flex justify-between items-center text-white w-full ">
        <div className="w-3/6">
          test
        </div>
        <div className="w-3/6 h-fit relative ">
          <ColumnBlue CusStyle={"h-full -z-3"} />
          <h3 className="z-1 w-full flex justify-center items-center p-3 text-3xl font-bold">
            ماجراجویی  مالی  تو اینجاست ...
          </h3>
          <p className="z-1 w-full flex justify-center items-center text-justify p-3">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>

        </div>
      </div>
    </main>
  );
}
