import React from 'react';
import { useState } from 'react'; 
  import mann from '../mann.png';   // صورة الزرعة
const LandingPage = () => {
  // بيانات المواد (الكنوز)
  const treasures = [
    { title: 'العقيدة', desc: 'أسس الإيمان الراسخة ومبادئ العقيدة الصحيحة', icon: '⚖️' },
    { title: 'الفقه', desc: 'فهم الأحكام الشرعية وتطبيقها في الحياة اليومية', icon: '☪️' },
    { title: 'التفسير', desc: 'تدبر آيات القرآن وفهم معانيها العميقة', icon: '📖' },
  ];

  // بيانات المشايخ
  const teachers = [
    { 
      name: 'الشيخ سمير مصطفى فرج', 
      role: 'متخصص في علوم العقيدة والتوحيد', 
      tag: 'مادة العقيدة',
      image: '/src/S.png', // ضعي مسار الصورة الصحيح
    },
    { 
      name: 'الشيخ أنس السلطان', 
      role: 'حافظ للقرآن ومتخصص في الفقه الإسلامي', 
      tag: 'الفقه',
      image: '/images/sheikh2.jpg' // ضعي مسار الصورة الصحيح
    },
    { 
      name: 'الشيخ أنس السلطان', 
      role: 'حافظ للقرآن ومتخصص في الفقه الإسلامي', 
      tag: 'الفقه',
      image: '/images/sheikh2.jpg' // ضعي مسار الصورة الصحيح
    },
  ];

 

  return (
    <div className="x">
      
      {/* ================= القسم الأول: من نحن (الصورة المقوسة) ================= */}
      <section className="about-section" dir="rtl">
      <div className="about-container">
        
        {/* --- 1. قسم النصوص (الأول في الكود = الأعلى في الموبايل) --- */}
        <div className="text-content">
          
          <div className="badge-wrapper">
            <span className="badge">من نحن</span>
          </div>

          <h2 className="main-title">
            ليست مجرد منصة.. <br />
            <span className="highlight-text">إنها واجب</span>
          </h2>

          <div className="description">
            <p>
              "نحن لا نبيع منتجاً.. بل نقدم واجباً.. لأننا نرى في كل شاشة
              نبرمجها منبراً للخير، وفي كل كود نكتبه دعاءً يرفع، وفي كل
              تصميم نبتكره محراباً يربط القلب بالسماء.
            </p>
            <p>
              من مثلنا - بإمكاناتنا البسيطة وإيماننا الكبير - نزرع بذرة
              التغيير في تربة الأمة، ونسقيها بالنية الخالصة، وننتظر من
              الله أن تنمو شجرة تظلل الأجيال القادمة"
            </p>
          </div>
        </div>

        {/* --- 2. قسم الصورة (الثاني في الكود = الأسفل في الموبايل) --- */}
        <div className="image-content">
          <div className="arch-wrapper">
            
            {/* الزرعة الديكورية (فوق الكل)
            <img src={plant2} alt="plant" className="decor-plant-corner" /> */}

            {/* الإطار الخلفي (الحدود فقط) */}
            <div className="arch-border"></div>

            {/* الصورة الرئيسية */}
            <div className="arch-image-container">
              <img src={mann} alt="من نحن" className="arch-img" />
            </div>

          </div>
        </div>

      </div>
    </section>


      {/* ================= القسم الثاني: كنوز علومنا (البطاقات) ================= */}
      <section className="T">
        <h3 className="t">اكتشف كنوز علومنا</h3>
        
        <div className="tt">
          {treasures.map((item, index) => (
           
            <div key={index} className="t2">
              
              <div className="t3">
                {item.icon}
              </div>
             
              <h4 className="t4">{item.title}</h4>
                       
              <p className="t5">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt">
          <button className="pp">
            اكتشف المزيد<span className='ss'>←</span> 
          </button>
        </div>
      </section>


      {/* ================= القسم الثالث: مشايخنا ================= */}
     <section className="relative">
  
  {/* رأس القسم */}
  <div className="t6">
    <div className="..">
      <span className="dd">هيئة التدريس</span>
      <h3 className="t0">تعرف على مشايخنا</h3>
    </div>
  </div>

  {/* شبكة الكروت */}
  <div className="y">
    {teachers.map((teacher, index) => (
      <div key={index} className="yy">
        
        {/* صورة الشيخ (على اليمين) */}
        <img 
          src={teacher.image}
          alt={teacher.name} 
          className="w"
        />
        
        {/* التفاصيل (على اليسار) */}
        <div className="text-right flex-1">
          <div className='ddd'>
            {/* هنا قمت بعمل حيلة بسيطة لتغيير اللون حسب المادة */}
            <span 
              className="tag"
              style={{
                backgroundColor: teacher.tag.includes('الفقه') ? '#d1e7dd' : '#d1e7dd',
                color: teacher.tag.includes('الفقه') ? '#0f5132' : '#0f5132'
              }}
            >
              {teacher.tag}
            </span>
          </div>
          
          <h4 className="n">{teacher.name}</h4>
          <p className="ch">{teacher.role}</p>
        </div>
        
      </div>
    ))}
  </div>
  
  {/* زر "تعرف على جميع مشايخنا" (اختياري كما في الصورة) */}
 
</section>
    </div>
  );
};

export default LandingPage;