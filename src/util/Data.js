import Amirali from "../assets/Images/TeamMemebers/Amirali2.png";
import Mehdi from "../assets/Images/TeamMemebers/Mehdi2.png";
import Amirhossein from "../assets/Images/TeamMemebers/Amirhossein.png";
import Nasrin from "../assets/Images/TeamMemebers/Narges.png";
import Shiva from "../assets/Images/TeamMemebers/Shiva.png";
import Davood from "../assets/Images/TeamMemebers/David.png";
import Parham from "../assets/Images/TeamMemebers/parham.png";
import Unknown from "../assets/Images/TeamMemebers/Unknown.png";
import Alireza from "../assets/Images/TeamMemebers/Alireza.png";
import Yassaman from "../assets/Images/TeamMemebers/Yassaman.png";

export const services = [
    {
        name: "امیرعلی نیرومند زال پور",
        title: "Founder & CEO",
        role: ["مسئول نظارت کلی", "مدیریت استراتژیک پروژه", "تعیین مسیر رشد"],
        image: Amirali,
    },
    {
        name: "مهدی خسروی",
        title: "Technical Lead ",
        role: ["مسئول توسعه ربات تلگرام", "مدیریت زیرساخت فنی"],
        image: Mehdi,
    },
    {
        name: "پرهام حسن‌زاده",
        title: "Senior Web Designer ",
        role: [],
        image: Parham,
    },
    {
        name: "امیرحسین اسدیار",
        title: "Content & Market Analysis Lead ",
        role: ["تدوین تحلیل‌های بازار", "سیگنال‌دهی", "مدیریت محتوای تحلیلی"],
        image: Amirhossein,
    },
    {
        name: "علیرضا نیرومند زال پور",
        title: "Educational Content Lead ",
        role: ["طراحی دوره‌های آموزشی", "تدوین مسیر رشد کاربران"],
        image: Alireza,
    },
    {
        name: "نسرین قادری",
        title: "SEO & Documentation Specialist ",
        role: ["تنظیم اسناد پروژه", "هماهنگی تیم", "مدیریت زمان‌بندی مستندات"],
        image: Nasrin,
    },
    {
        name: "شیوا محققی",
        title: "PR Development Consultant ",
        role: ["مشاوره در زمینه برندینگ", "ارتباط با مخاطبان"],
        image: Shiva,
    },
    {
        name: "داوود سپهریان",
        title: "Data Analyst & Market Researcher ",
        role: [
            "تحلیل داده‌های کاربران",
            "بررسی بازارهای هدف",
            "تدوین استراتژی‌های ورود به بازار",
        ],
        image: Davood,
    },
    {
        name: " یاسمین طاهری",
        title: "Senior Visual Designer ",
        role: [
            "تحلیل داده‌های کاربران",
            "بررسی بازارهای هدف",
            "تدوین استراتژی‌های ورود به بازار",
        ],
        image: Yassaman,
    },
];

export const phases = [
    {
        title: "فاز اول: آماده‌سازی توسعه اولیه",
        number: 1,
        tasks: [
            {
                desc: "طراحی مدل اقتصادی پروژه و مسیر رشد کاربران جذب اعضای اولیه تیم و تعیین نقش‌ها",
                status: true,
            },
            { desc: "جذب اعضای اولیه تیم و تعیین نقش‌ها", status: true },
            {
                desc: "وسعه نسخه ابتدایی پلتفرم از طریق ربات تلگرام (نمونه اولیه یا MVP)",
                status: true,
            },
            { desc: "امنیت و انتشار توکن BEHT روی بلاک‌چین TON", status: false },
            {
                desc: "تست اولیه کیف پول کاربران و ثبت اطلاعات حساب‌ها",
                status: false,
            },
            { desc: "تدوین ساختار آموزشی سطوح VIP 0 و VIP1", status: false },
            {
                desc: "طراحی نسخه اولیه سایت و آماده‌سازی زیرساخت‌های فروش",
                status: false,
            },
            {
                desc: "تهیه اسناد رسمی، پرزنتیشن‌ها و مطالب معرفی پروژه",
                status: false,
            },
            {
                desc: "•  آماده‌سازی تبلیغات مرحله اول فروش خصوصی توکن BEHT از طریق کانال «به‌تحلیل»",
                status: false,
            },
        ],
        active: true,
    },
    {
        title: "فاز ۲: فروش مرحله‌ای و تقویت زیرساخت",
        number: 2,
        active: false,
        tasks: [
            {
                desc: " جذب نهایی اعضای تخصصی تیم و تثبیت ساختار درون‌سازمانی",
                status: false,
            },
            {
                desc: " مینت توکن و انتقال آن به والت های مربوط",
                status: false,
            },
            {
                desc: "  اجرای مرحله اول و دوم پیش‌فروش توکن BEHT از طریق کانال «به‌تحلیل",
                status: false,
            },
            {
                desc: " نهایی‌سازی توسعه و تست ربات تلگرام",
                status: false,
            },
            {
                desc: "اجرای اقدامات حقوقی از جمله احراز هویت کاربران (KYC)، ثبت برند و سیاست‌های حفاظت از داده‌ها",
                status: false,
            },
            {
                desc: "•  بارگذاری کامل دوره‌های آموزشی سطوح VIP 0 و VIP 1",
                status: false,
            },
            {
                desc: "•  تست زیرساخت کیف پول داخلی کاربران",
                status: false,
            },
            {
                desc: "آماده‌سازی نسخه نهایی سایت و اتصال آن به ربات تلگرام",
                status: false,
            },
            {
                desc: "•  آماده‌سازی تبلیغات مرحله اول فروش خصوصی توکن BEHT از طریق کانال «به‌تحلیل»",
                status: false,
            },
        ],
    },
    {
        title: "فاز ۳: تکمیل زیرساخت، آموزش پیشرفته و NFT",
        number: 3,
        active: false,
        tasks: [
            {
                desc: "•  اجرای مرحله سوم و چهارم پیش‌فروش توکن در کانال «به‌تحلیل»",
                status: "gray",
            },
            {
                desc: "•  اجرای مرحله پنجم فروش توکن از طریق یک صرافی غیرمتمرکز (DEX)",
                status: "gray",
            },
            {
                desc: "•  نهایی‌سازی اتصال کامل سایت و ربات تلگرام",
                status: "gray",
            },
            {
                desc: "•  آغاز توسعه مینی‌اپ تلگرام با قابلیت‌های پیشرفته",
                status: "gray",
            },
            {
                desc: "•  بارگذاری کامل دوره‌های آموزشی سطوح VIP 2 و VIP 3",
                status: "gray",
            },
            {
                desc: "•  طراحی و انتشار نسخه‌های اولیه NFT برای کاربران یادگیرنده",
                status: "gray",
            },
            {
                desc: "•  تکمیل توسعه کیف پول داخلی با نمایش دارایی‌ها، امتیازها و مسیر رشد کاربران",
                status: "gray",
            },
        ],
    },
    {
        title: "فاز ۴: گسترش بازار و آغاز فروش عمومی",
        number: 4,
        active: true,
        tasks: [],
    },
    {
        title: "فاز ۵: تثبیت اقتصادی و رشد پایدار",
        number: 5,
        active: false,
        tasks: [],
    },
];
