import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section" dir="rtl">
      <div className="cta-container">
        
        {/* --- الجزء الجديد: الزر العلوي --- */}
        <div className="top-banner-wrapper">
          <button className="top-banner-btn">
            تعرف على جميع مشايخنا
            <span className="arrow-icon">←</span>
          </button>
        </div>

        {/* --- الجزء السابق: النصوص وزر التسجيل --- */}
        <div className="cta-wrapper">
          
          {/* الجانب الأيمن: النصوص */}
          <div className="cta-text-content">
            <div className="headline-top">
              <span className="word-start">ابدأ</span>
              <span className="highlight-badge">
                سجل مجاناً وانضم إلى آلاف الطلاب
              </span>
            </div>
            <h2 className="headline-bottom">
              رحلتك التعليمية اليوم
            </h2>
          </div>

          {/* الجانب الأيسر: زر إنشاء الحساب */}
          <div className="cta-action">
            <button className="cta-button">
              أنشئ حسابك المجاني الآن
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction ;