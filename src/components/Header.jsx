import '../styles/Header.css';

function Header() {
  return (
    <header className="h">
      {/* جزء الشعار (اليمين) */}
      <div className="h1">
        {/* Placeholder للشعار - استبدله بـ <img src="..." alt="Logo" /> */}
        <span className="h2">ميراثاً</span>
      </div>

      {/* جزء الروابط (الوسط) */}
      <nav className="h3" dir="rtl">
        <a href="#about" className="h33">الرئيسية</a>
        <a href="#courses" className="h333">من نحن</a>
        <a href="#teachers" className="h333">هيئة التدريس</a>
        <a href="#contact" className="h333"> اتصل بنا</a>
      </nav>

      {/* جزء تسجيل الدخول (اليسار) */}
      <div className="h4" >
        
        <a href="#login" className="h5">تسجيل الدخول</a>
       
      </div>
    </header>
  );
}

export default Header;