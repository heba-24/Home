import React from 'react';
import '../styles/Hero.css';
const HeroSection = () => {
  // ملاحظة: الأرقام يمكن أن تكون كائن حالة (state) أو متغيرات
  const stats = [
    { value: '+3,730', label: 'طالب نشط ' },
    { value: '+37', label: 'دورة شرعية' },
    { value: '+15', label: ' معلم متميز' },
  ];

  return (
    <section className="l" >
             
      
      {/* طبقة تظليل للحفاظ على وضوح النص */}
      <div className="l2"></div>

      <div className="l3">
        
        {/* الشعار والنص */}
        <div className="l1">
        <div className="l4">
          <h1 className="l5">ميراثاً</h1>
          <h2 className="l6">نور نحمله للأجيال</h2>
          <p className="l7">
            (منصة تعليمية مجانية ١٠٠٪ لإحياء التراث الإسلامي بأسلوب عصري بسيط، يناسب الكبار والصغار)
          </p>
        </div>

        {/* زر الدعوة لاتخاذ إجراء */}
        <div className="l8">
          <button className="l9">
          ابدأ رحلتك مجاناً          
  
            </button>
          <button className="l10">
            تعرف علينا أكثر
          </button>
        </div>
        </div>

        {/* شريط الإحصائيات والأرقام */}
        <div className="j">
          {stats.map((stat, index) => (
            <div key={index} className="j1">
             
              <p className="j2">{stat.value}</p>
              <p className="j3">{stat.label}</p>
            
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;